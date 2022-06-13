import { TestBed } from '@angular/core/testing';
import { HttpInterceptorService } from './http-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

const mockResponse = new HttpResponse({ body: { id: 1, name: 'John' } });
const mockHandler = {
  handle: jest.fn(() =>
    of(mockResponse)
  ),
};
const credentials = {
  id: 1,
  username: 'test',
  email: 'test@test.com.br',
  token: '123'
};

let router: Router;

describe('HttpInterceptorService', () => {
  const sutError = (statusCode: number) => {
    return {
      handle: jest.fn(() => throwError(
        new HttpErrorResponse({status: statusCode, error: {message: 'This is an error'}})))
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });

    router = TestBed.inject(Router);
  });

  it('should intercept request without credentials', async () => {
    router = TestBed.inject(Router);
    const request = new HttpRequest('GET', '/api/users/');
    const httpInterceptor = new HttpInterceptorService(router, new AuthService);
      httpInterceptor.intercept(request, sutError(401)).subscribe(
        response => {},
        error => {
          expect(error).toBeTruthy();
        });
  });

  it('should intercept request with credentials', async () => {
    const request = new HttpRequest('GET', '/api/users/');
    const authService = new AuthService()
    authService.credentials = credentials;

    const httpInterceptor = new HttpInterceptorService(router, new AuthService);
    const response = await httpInterceptor
      .intercept(request, mockHandler)
      .toPromise();
    expect(response).toEqual(mockResponse);
  });

  describe('errorHandler', () => {
    it.each([400, 401, 404, 500])('should call error %i', (statusCode) => {
      const requestMock = new HttpRequest('GET', '/wrongtest');
      const httpInterceptor = new HttpInterceptorService(router, new AuthService);
      httpInterceptor.intercept(requestMock, sutError(statusCode)).subscribe(
        response => {},
        error => {
          expect(error).toBeTruthy();
        });
    });
  });
});
