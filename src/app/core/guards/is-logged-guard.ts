import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageProvider } from '../providers/storage';

export const isLoggedGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const storage = inject(StorageProvider);

  const token = await storage.get('token'); // tu lógica de auth

  if (token) {
    // ✅ Si ya está logueado → lo mando al home
    router.navigate(['/home']);
    return false; 
  }

  // ✅ No logueado → puede entrar al login o register
  return true;
};
