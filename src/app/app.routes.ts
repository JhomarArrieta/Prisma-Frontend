import { Routes } from '@angular/router';
import { Registro } from './core/auth/pages/registro/registro/registro';
import { Home } from './domains/usuarios/pages/home/home';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Registro },
    { path: 'home', component: Home},
];
