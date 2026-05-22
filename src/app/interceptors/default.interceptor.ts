import { HttpInterceptorFn } from '@angular/common/http';

export const defaultInterceptor: HttpInterceptorFn = (req, next) => {
  const modified = req.clone({
    headers: req.headers.set('x-default', 'app-config-interceptor'),
  });
  return next(modified);
};
