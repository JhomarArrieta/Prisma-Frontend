import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Usuario, UsuarioDTO } from '../models/usuario';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosApi {
  private readonly http = inject(HttpClient); // se usa para hacer peticiones HTTP
  private readonly apiUrl = `${environment.apiUrl}/usuario`; // URL base de la API de usuario

 // Signal for reactive state management 
  private readonly isLoadingSignal = signal<boolean>(false);
  private readonly usuariosSignal = signal<Usuario[]>([]);

// Readonly signals for external consumption
  public readonly isLoading = this.isLoadingSignal.asReadonly();
  public readonly usuarios = this.usuariosSignal.asReadonly();

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

