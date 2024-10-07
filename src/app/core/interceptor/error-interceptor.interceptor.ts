import { HttpInterceptorFn } from '@angular/common/http';

export const errorInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
   // Clone the request and add a custom header
   const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer my-token`
    }
  });
  return next(req);
};
