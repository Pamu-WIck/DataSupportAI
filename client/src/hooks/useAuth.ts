import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";

interface StudentProfile {
  id: number;
  userId: number;
  name: string;
  email: string;
  avatarUrl: string | null;
  schoolYear: number | null;
  totalPoints: number;
  streak: number;
  lastActive: string;
  createdAt: string;
}

interface User {
  id: number;
  email: string;
  role: string;
  studentProfile?: StudentProfile | null;
}

interface AuthResponse {
  success: boolean;
  data?: {
    user: User;
  };
  message?: string;
}

export const useAuth = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  // Get current user
  const { data, isLoading, error } = useQuery<AuthResponse>({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const response = await fetch("/api/auth/me", {
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error("Not authenticated");
      }
      return response.json();
    },
    retry: false,
    staleTime: 5 * 60 * 1000 // 5 minutes
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password
    }: {
      email: string;
      password: string;
    }) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["auth", "me"], data);

      // Redirect based on role
      const role = data.data.user.role;
      if (role === "student") {
        setLocation("/dashboard");
      } else if (role === "admin" || role === "super_admin") {
        setLocation("/admin/dashboard");
      } else {
        setLocation("/");
      }
    }
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async ({
      email,
      password,
      name,
      schoolYear
    }: {
      email: string;
      password: string;
      name: string;
      schoolYear?: number;
    }) => {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, name, schoolYear })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      return data;
    },
    onSuccess: () => {
      // Redirect to login page after successful registration
      setLocation("/login");
    }
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth", "me"], null);
      queryClient.clear(); // Clear all cached data on logout
      setLocation("/login");
    }
  });

  return {
    user: data?.data?.user || null,
    isLoading,
    isAuthenticated: !!data?.data?.user,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
  };
};
