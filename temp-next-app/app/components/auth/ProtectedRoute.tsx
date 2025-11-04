import { ReactNode } from "react";
import { Redirect } from "wouter";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: string | string[];
  redirectTo?: string;
}

/**
 * ProtectedRoute component
 * Protects routes based on authentication and role requirements
 *
 * @param children - The component(s) to render if authorized
 * @param requiredRole - Optional role(s) required to access the route
 * @param redirectTo - Optional custom redirect path (defaults to /login)
 */
const ProtectedRoute = ({
  children,
  requiredRole,
  redirectTo = "/login"
}: ProtectedRouteProps) => {
  const { user, isLoading, isAuthenticated } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mb-4"></div>
          <p className="font-montserrat text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Redirect to={redirectTo} />;
  }

  // Check role requirements if specified
  if (requiredRole) {
    const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];

    if (user && !allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard based on user's actual role
      if (user.role === 'student') {
        return <Redirect to="/dashboard" />;
      } else if (user.role === 'admin' || user.role === 'super_admin') {
        return <Redirect to="/admin/dashboard" />;
      }

      // Fallback redirect
      return <Redirect to="/" />;
    }
  }

  // User is authenticated and authorized
  return <>{children}</>;
};

export default ProtectedRoute;
