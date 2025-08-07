import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form-signin',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './auth-form-signin.html',
  styleUrls: ['../auth-form.css']
})
export class AuthFormSignIn{
  //form: FormGroup = new FormGroup({});
  form: FormGroup;
  listaOpciones = ['Medellín', 'Bello', 'Sabaneta', 'Envigado', 'Itagüí'];
  
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      id: [null],
      primer_nombre: ['', Validators.required],
      segundo_nombre: [''],
      primer_apellido: ['', Validators.required],
      segundo_apellido: [''],
      ubicacion: [''],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      administrador: [false],
      fecha_nacimiento: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('http://localhost:8080/usuario', this.form.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
