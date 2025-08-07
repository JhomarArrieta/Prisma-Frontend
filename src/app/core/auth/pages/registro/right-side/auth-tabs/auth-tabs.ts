import { Component, EventEmitter, Output, output } from '@angular/core';
import { AuthFormLogin } from "../auth-form/auth-form-login/auth-form-login";
import { AuthFormSignIn } from "../auth-form/auth-form-signin/auth-form-signin";

@Component({
  selector: 'app-auth-tabs-right-side',
  imports: [AuthFormLogin, AuthFormSignIn],
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
