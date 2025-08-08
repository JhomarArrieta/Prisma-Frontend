import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { UserCompleted, Usuario, UsuarioDTO } from '../models/usuario';
import { AuthResponse, Login } from '../models/authentication';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsuariosApi {
  private readonly http = inject(HttpClient); // se usa para hacer peticiones HTTP
  private readonly apiUrl = `${environment.apiUrl}/usuario`; // URL base de la API de usuario

 // Signal for reactive state management 
  private readonly isLoadingSignal = signal<boolean>(false);
  private readonly usuariosSignal = signal<Usuario[]>([]);
  private readonly userCSignal = signal<UserCompleted[]>([]);

// Readonly signals for external consumption
  public readonly isLoading = this.isLoadingSignal.asReadonly();
  public readonly usuarios = this.usuariosSignal.asReadonly();
  public readonly usersC = this.userCSignal.asReadonly();

  createUsuario(usuario: UsuarioDTO): Observable<Usuario> {
    this.isLoadingSignal.set(true);

    return this.http.post<Usuario>(this.apiUrl, usuario)
      .pipe(
        tap(newUsuario => {
          const currentUsuarios = this.usuariosSignal();
          this.usuariosSignal.set([...currentUsuarios, newUsuario]);
          this.isLoadingSignal.set(false);
        }),
        catchError(error => {
          this.isLoadingSignal.set(false);
          return this.handleError(error);
        })
      );
  }

    autenticar(loginData: Login): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/autenticar`, loginData)
      .pipe(
        tap(res => {
          // Guarda el token y datos en localStorage (o donde prefieras)
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', res.email);
          localStorage.setItem('admin', String(res.administrador));
        }),
        catchError(error => {
          this.isLoadingSignal.set(false);
          return this.handleError(error);
        })
      );
  }

  getUserId(): number | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.id || null; // según el nombre del claim que pusiste en el backend
    } catch (error) {
      console.error('Token inválido', error);
      return null;
    }
  }

    traerUsuariosPorPreferencias(id_usuario: number): Observable<UserCompleted[]> {
    this.isLoadingSignal.set(true);

    return this.http.get<UserCompleted[]>(`${this.apiUrl}/candidatos/${id_usuario}`)
      .pipe(
        tap(usersC => {
          this.userCSignal.set(usersC);
          this.isLoadingSignal.set(false);
        }),
        catchError(error => {
          this.isLoadingSignal.set(false);
          return this.handleError(error);
        })
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = 'Bad request. Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized. Please log in.';
          break;
        case 403:
          errorMessage = 'Forbidden. Admin access required for alumni operations.';
          break;
        case 404:
          errorMessage = 'Alumno not found.';
          break;
        case 409:
          errorMessage = 'Alumno already exists.';
          break;
        case 500:
          errorMessage = 'Internal server error. Please try again later.';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    
    console.error('UsuarioService Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}

