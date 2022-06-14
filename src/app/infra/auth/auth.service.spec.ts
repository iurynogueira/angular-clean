import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

const credentialsKey = 'credentials';

describe('AuthService', () => {
  let authService: AuthService;

  const usuario = {
    id: 1,
    username: 'test',
    email: 'test@test.com.br',
    token: '123',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });

    authService = TestBed.get(AuthService);
  });

  it('should be create instance', () => {
    expect(authService).toBeTruthy();
  });

  describe('login', () => {
    it('should return credentials', () => {
      authService.credentials = usuario;
      expect(authService.credentials).toBeDefined();
      expect(authService.credentials.token).toBeDefined();
    });

    it('should auth a user', () => {
      authService.credentials = usuario;
      expect(authService.isAuthenticated()).toBe(true);
    });
  });

  describe('logout', () => {
    it('should clean auth a user', () => {
      authService.credentials = {};
      expect(authService.isAuthenticated()).toBe(false);
    });
  });

  afterEach(() => {
    localStorage.removeItem(credentialsKey);
    sessionStorage.removeItem(credentialsKey);
  });
});
