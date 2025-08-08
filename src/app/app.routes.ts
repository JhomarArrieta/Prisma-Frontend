import { Routes } from '@angular/router';
import { Registro } from './core/auth/pages/registro/registro/registro';
import { Home } from './domains/usuarios/pages/home/home';
import { Profile } from './domains/usuarios/pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Registro },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile } 
];
