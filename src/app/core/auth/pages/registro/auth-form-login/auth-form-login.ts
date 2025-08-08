import { Component, inject } from '@angular/core';
import { UsuariosApi } from '../../../../../domains/usuarios/services/usuarios-api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form-login',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './auth-form-login.html',
  styleUrl: './auth-form-login.css'
})
export class AuthFormLogin {
  form: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuariosApi, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
    this.usuarioService.autenticar(this.form.value).subscribe({
      next: (res) => {
        console.log('Login exitoso', res);
        // Aquí puedes redirigir a otra página, guardar más cosas o actualizar UI
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log('Login fallido', err);
      }
    });
    }
  }
}
