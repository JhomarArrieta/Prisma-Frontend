import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSide } from "./left-side/left-side";
import { RightSide } from "./right-side/right-side";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftSide, RightSide],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular1');
}
