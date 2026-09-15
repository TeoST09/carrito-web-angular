import { Routes } from '@angular/router';
import { Carrito } from './carrito/carrito';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'carrito',
        pathMatch: 'full'
    },
    {path: 'carrito', component: Carrito}
];
