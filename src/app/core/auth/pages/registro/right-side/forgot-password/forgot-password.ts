import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password-right-side',
  imports: [],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {
  forgotPassword() {
    alert('Te enviaremos un enlace para restablecer tu contraseña 📧');
  }
}

