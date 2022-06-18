import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });

    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should add value in local storage', () => {
    localStorageService.set('name', 'angular');
    const value = JSON.parse(localStorage.getItem('name') || '');
    expect(value).toBe('angular');
  });
  it('should throw error when no key is provided to set', () => {
    expect(() => {
      localStorageService.set('', 'angular');
    }).toThrowError('Error saving to localStorage: key not provided');
  });
  it.todo(
    'should throw error when local storage cannot set the provided value'
  );
});
