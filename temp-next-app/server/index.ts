import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import passport from "./auth/passport";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session configuration
const PgSession = connectPgSimple(session);

app.use(
  session({
    store: new PgSession({
      conString: process.env.DATABASE_URL,
      tableName: "sessions",
      createTableIfMissing: true, // Auto-create sessions table
    }),
    secret: process.env.SESSION_SECRET || "your-secret-key-change-in-production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "lax"
    }
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  // build listen options and avoid reusePort on Windows where it's unsupported
    const listenOptions: { port: number; host: string; reusePort?: boolean } = { port, host: "0.0.0.0" };
  if (process.platform !== "win32") {
    // reusePort is useful on POSIX systems for load-balancing but is not supported on Windows
    listenOptions.reusePort = true;
  }

  // attempt to listen. If reusePort is not supported we catch ENOTSUP and retry without it.
  const onListening = () => {
        log(`\n🚀 Server running at: http://localhost:${port}`);
    log(`   Local:   http://localhost:${port}`);
    log(`   Network: http://0.0.0.0:${port}\n`);
  };

  // attach an error handler to attempt fallback when needed
  server.on("error", (err: any) => {
    if (err && err.code === "ENOTSUP" && listenOptions.reusePort) {
      log("reusePort not supported on this platform — retrying without reusePort");
      delete listenOptions.reusePort;
      try {
        server.listen(listenOptions, onListening);
      } catch (e) {
        // if retry fails, surface the error
        throw e;
      }
    } else {
      // rethrow other errors so they are visible
      throw err;
    }
  });

  // start server initially
  server.listen(listenOptions, onListening);
})();
