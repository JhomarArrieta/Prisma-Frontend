import { Component, inject, Output } from '@angular/core';
import { HomeUserInfo } from '../home-user-info/home-user-info';
import { HomeActionButtons } from '../home-action-buttons/home-action-buttons';
import { HomeMainContent } from '../home-main-content/home-main-content';
import { HomeProfileContainer } from '../home-profile-container/home-profile-container';
import { HomeNavMenu } from '../home-nav-menu/home-nav-menu';
import { UserCompleted } from '../../models/usuario';
import { UsuariosApi } from '../../services/usuarios-api';

@Component({
  selector: 'app-home',
  imports: [HomeUserInfo, HomeActionButtons, HomeMainContent, HomeProfileContainer, HomeNavMenu],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    private users: UserCompleted[] = [];
    private userService: UsuariosApi = inject(UsuariosApi);
    public user: UserCompleted = this.users.pop()!;
    userId: number = this.userService.getUserId()!;

    
  constructor(){
    this.userService.traerUsuariosPorPreferencias(this.userId).subscribe({
      next: (usersPref) => {
      for (const user of usersPref){
        this.users.push({
          primer_nombre: user.primer_nombre,
          primer_apellido: user.primer_apellido,
          ubicacion: user.ubicacion,
          tipo_relacion: user.tipo_relacion,
          foto: user.foto
      });
    }
    }, error: (err) => {
      console.error('Error al traer usuarios', err);
    }
      });
    }

  buttonPassed(passed: boolean){
    if(passed){
      this.user = this.users.pop()!;
    }
  }
}
