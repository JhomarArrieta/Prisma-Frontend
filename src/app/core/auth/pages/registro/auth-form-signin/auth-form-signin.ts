import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosApi } from '../../../../../domains/usuarios/services/usuarios-api';

@Component({
  selector: 'app-auth-form-signin',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './auth-form-signin.html',
  styleUrls: ['./auth-form-signin.css']
})
export class AuthFormSignIn{
  //form: FormGroup = new FormGroup({});
  form: FormGroup;
  listaOpciones = ['Medellín', 'Bello', 'Sabaneta', 'Envigado', 'Itagüí'];
  private usuarioService: UsuariosApi = inject(UsuariosApi);
  
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      id: [null],
      primer_nombre: ['', Validators.required],
      segundo_nombre: [''],
      primer_apellido: ['', Validators.required],
      segundo_apellido: [''],
      ubicacion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      administrador: [false],
      fecha_nacimiento: ['', Validators.required],
    });
  }
   
  onSubmit(): void {
    console.log('Form submitted:', this.form.value);
    
    if (this.form.valid) {
    this.usuarioService.createUsuario({
      id: this.form.value.id,
      primer_nombre: this.form.value.primer_nombre,
      segundo_nombre: this.form.value.segundo_nombre,
      primer_apellido: this.form.value.primer_apellido,
      segundo_apellido: this.form.value.segundo_apellido,   
      ubicacion: this.form.value.ubicacion,
      email: this.form.value.email,
      contrasena: this.form.value.contrasena,
      administrador: this.form.value.administrador,
      fecha_nacimiento: this.form.value.fecha_nacimiento,
    }).subscribe({
      next: (response) => {
        console.log('Usuario creado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      }
    })
  }
  }
}
