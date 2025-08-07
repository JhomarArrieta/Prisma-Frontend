import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LeftSide } from "./core/auth/pages/registro/left-side/left-side";
import { RightSide } from "./core/auth/pages/registro/right-side/right-side";
import { Registro } from "./core/auth/pages/registro/registro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LeftSide, RightSide, Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1');
}
