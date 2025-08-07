import { Component, Input } from '@angular/core';
import { AuthFormLogin } from "./auth-form-login/auth-form-login";
import { AuthFormSignedin } from "./auth-form-signedin/auth-form-signedin";

@Component({
  selector: 'app-auth-form-right-side',
  imports: [AuthFormLogin, AuthFormSignedin],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.css'
})
export class AuthForm {
  @Input() tabLogin: boolean = true;
}
