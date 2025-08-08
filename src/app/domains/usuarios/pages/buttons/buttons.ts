/* auto generado
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
})
export class Buttons {

}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './buttons.html',
  styleUrls: ['./buttons.css']
})
export class ActionButtonsComponent {
  
  onLike() {
    alert('¡Es un Match! 💖');
  }

  onReject() {
    alert('Perfil rechazado');
  }

  onBack() {
    alert('Regresando al perfil anterior...');
  }

  onInfo() {
    alert('Mostrando más información del perfil...');
  }
}
