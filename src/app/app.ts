import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosApi } from './domains/usuarios/services/usuarios-api';
import { Registro } from "./core/auth/pages/registro/registro/registro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1');

}
