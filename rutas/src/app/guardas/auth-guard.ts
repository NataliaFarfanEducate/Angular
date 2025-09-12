import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  //Lógica de autentificación
  const permitido = false;
  if(!permitido){
    alert('ACCESO DENEGADO');
    router.navigateByUrl('/');
    return false;
  }
  return false;
};
