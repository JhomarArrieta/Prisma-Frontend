import { Component } from '@angular/core';
import { LeftSide } from "../left-side/left-side";
import { RightSide } from "../right-side/right-side";

@Component({
  selector: 'app-registro',
  imports: [LeftSide, RightSide],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

}
