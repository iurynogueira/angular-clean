import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ValidationError } from 'ts.validator.fluent/dist';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.credentials.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.credentials.token}`,
        },
      });
      return next
        .handle(req)
        .pipe(catchError((error) => this.errorHandler(error)));
    } else {
      return next
        .handle(req)
        .pipe(catchError((error) => this.errorHandler(error)));
    }
  }

  private errorHandler(
    response: HttpErrorResponse
  ): Observable<HttpEvent<unknown>> {
    const errs: unknown[] = [];

    switch (response.status) {
      case 400:
        // console.log('Error', response.status);
        break;
      case 401:
        this.router.navigateByUrl('/login', { replaceUrl: true });
        break;
      case 404:
        errs.push(
          new ValidationError(
            '',
            '',
            '<strong>404</strong>: O recurso requisitado não existe.'
          )
        );
        break;
      case 500:
        // console.log('Ocorreu um erro inesperado de servidor.');
        break;
    }

    return throwError(errs);
  }
}
