import { HttpInterceptorFn } from '@angular/common/http';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  const modified = req.clone({
    headers: req.headers.set('x-admin', 'admin-interceptor'),
  });
  return next(modified);
};
