import { HttpInterceptorFn } from '@angular/common/http';

export const dibasedInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
