import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form-signedin',
  imports: [],
  templateUrl: './auth-form-signedin.html',
  styleUrl: '../auth-form.css'
})
export class AuthFormSignedin {
  listaOpciones = ['Medellín', 'Bello', 'Sabaneta', 'Envigado', 'Itagüí'];
}
