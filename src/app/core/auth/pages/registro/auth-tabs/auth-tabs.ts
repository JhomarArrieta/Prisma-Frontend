import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-auth-tabs-right-side',
  imports: [],
  templateUrl: './auth-tabs.html',
  styleUrl: './auth-tabs.css'
})
export class AuthTabs {
    @Output() currentTabLogin = new EventEmitter<boolean>();
    active_btn: boolean = true;

    seleccionar(valor: boolean){
        this.active_btn = valor;
        this.currentTabLogin.emit(valor);
    }
}
