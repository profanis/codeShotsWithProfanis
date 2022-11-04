import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

export const isLoggedGuardFn: CanActivateFn = () => {
  const router = inject(Router);
  return inject(AuthService)
    .isLoggedIn$()
    .pipe(tap((isLoggedIn) => !isLoggedIn && router.navigate(['no-access'])));
};

export const canMatchGuardFn: CanMatchFn = () => {
  const router = inject(Router);
  return inject(AuthService)
    .isLoggedIn$()
    .pipe(tap((isLoggedIn) => !isLoggedIn && router.navigate(['no-access'])));
};
