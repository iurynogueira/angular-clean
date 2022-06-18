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

  afterEach(() => {
    localStorage.clear();
  });

  describe('Set', () => {
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
  describe('Get', () => {
    it('should get a single value in local storage', () => {
      localStorage.setItem('test', JSON.stringify('get'));
      expect(localStorageService.get('test')).toBe('get');
    });
    it('should get an object value in local storage', () => {
      const myObject = { value: 1 };
      localStorage.setItem('test', JSON.stringify(myObject));
      expect(localStorageService.get('test')).toEqual(myObject);
    });
    it('should return null when a given key is not setted', () => {
      expect(localStorageService.get('another test')).toBeNull();
    });
    it('should throw error when no key is provided to get', () => {
      expect(() => {
        localStorageService.get('');
      }).toThrowError('Error getting data in localStorage: key not provided');
    });
  });
});