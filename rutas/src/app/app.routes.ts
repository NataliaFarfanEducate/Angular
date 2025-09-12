import { Routes } from '@angular/router';
import { Productos } from './componentes/productos/productos';
import { Contacto } from './componentes/contacto/contacto';
import { Acercade } from './componentes/acercade/acercade';
import { Principal } from './componentes/principal/principal';
import { authGuard } from './guardas/auth-guard';

export const routes: Routes = [
    //objetos{} - arreglos[]
    { //que coloco luego del localhost ->"path"
        path: '', component: Principal
    },
    {path: 'productos', component: Productos, canActivate:[authGuard]},
    {path: 'contacto', component: Contacto},
    {path: 'acercade', component: Acercade},
    {path: '**', redirectTo: ''}
];
