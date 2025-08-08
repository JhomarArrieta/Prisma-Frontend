import { Component, inject, Input } from '@angular/core';
import { UserCompleted, Usuario } from '../../models/usuario';
import { UsuariosApi } from '../../services/usuarios-api';

@Component({
  selector: 'app-home-profile-container',
  imports: [],
  templateUrl: './home-profile-container.html',
  styleUrl: './home-profile-container.css'
})
export class HomeProfileContainer {
  @Input() user!: UserCompleted;
}