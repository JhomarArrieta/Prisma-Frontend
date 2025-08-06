import { Component } from '@angular/core';
import { AuthHeader } from "./auth-header/auth-header";
import { AuthTabs } from "./auth-tabs/auth-tabs";
import { AuthForm } from "./auth-form/auth-form";
import { ForgotPassword } from "./forgot-password/forgot-password";

@Component({
  selector: 'app-right-side',
  imports: [AuthHeader, AuthTabs, AuthForm, ForgotPassword],
  templateUrl: './right-side.html',
  styleUrl: './right-side.css'
})
export class RightSide {

}
