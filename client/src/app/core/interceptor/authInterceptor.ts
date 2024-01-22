import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('User') || '{}');

    if (user && user.token) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
      return next.handle(authRequest);
    } else {
      // Evitar que la petición se realice retornando un error observable
      return throwError("Usuario no logueado");
    }
  }
}
