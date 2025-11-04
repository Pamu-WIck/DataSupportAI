import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import VideoGallery from "./components/home/VideoGallery";
import FounderPage from "./pages/FounderPage";
import PastPapersPage from "./pages/PastPapersPage";
import GamificationPage from "@/pages/GamificationPage";
import LoginPage from "@/pages/auth/LoginPage";
import StudentDashboard from "@/pages/student/StudentDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/videos" component={VideoGallery} />
      <Route path="/founder" component={FounderPage} />
      <Route path="/past-papers" component={PastPapersPage} />
      <Route path="/achievements" component={GamificationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Switch>
            {/* Auth pages without header/footer */}
            <Route path="/login" component={LoginPage} />

            {/* Protected Student Dashboard */}
            <Route path="/dashboard">
              <ProtectedRoute requiredRole="student">
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <main className="flex-grow">
                    <StudentDashboard />
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            </Route>

            {/* Protected Admin Dashboard */}
            <Route path="/admin/dashboard">
              <ProtectedRoute requiredRole={["admin", "super_admin"]}>
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <main className="flex-grow">
                    <AdminDashboard />
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            </Route>

            {/* Regular pages with header/footer */}
            <Route>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  <Router />
                </main>
                <Footer />
              </div>
            </Route>
          </Switch>
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
