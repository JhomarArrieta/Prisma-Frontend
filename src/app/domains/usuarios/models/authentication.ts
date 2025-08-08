export interface Login {
  email: string;
  contrasena: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  administrador: boolean;
  id: number;
}