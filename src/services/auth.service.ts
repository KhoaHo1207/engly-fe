import apiClient from "@/lib/axios";

// Định nghĩa types cho request/response
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// Auth service - chứa tất cả API liên quan đến authentication
export const authService = {
  login: (data: LoginRequest) =>
    apiClient.post<AuthResponse>("/auth/login", data),

  register: (data: RegisterRequest) =>
    apiClient.post<AuthResponse>("/auth/register", data),

  getProfile: () => apiClient.get("/auth/profile"),

  logout: () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  },
};
