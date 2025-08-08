import { Component, inject } from '@angular/core';
import { RightSide } from '../right-side/right-side';
import { LeftSide } from '../left-side/left-side';
import { UsuariosApi } from '../../../../../domains/usuarios/services/usuarios-api';

@Component({
  selector: 'app-registro',
  imports: [LeftSide, RightSide],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

}

