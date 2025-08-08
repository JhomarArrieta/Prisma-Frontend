import { Component, Input } from '@angular/core';
import { AuthFormLogin } from "../auth-form-login/auth-form-login";
import { AuthFormSignIn } from "../auth-form-signin/auth-form-signin";

@Component({
  selector: 'app-auth-form-right-side',
  imports: [AuthFormLogin, AuthFormSignIn],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.css'
})
export class AuthForm {
  @Input() tabLogin: boolean = true;
}
