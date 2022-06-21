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
      localStorageService.set('folklore', 'evermore');
      const value = JSON.parse(localStorage.getItem('folklore') || '');
      expect(value).toBe('evermore');
    });
    it('should throw error when no key is provided to set', () => {
      expect(() => {
        localStorageService.set('', 'evermore');
      }).toThrowError('Error saving to localStorage: key not provided');
    });
    it('should throw error when local storage cannot set the provided value', () => {
      jest.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
        throw new Error();
      });
      expect(() => {
        localStorageService.set('folklore', 'evermore');
      }).toThrowError('Error saving to localStorage: Error');
    });
  });
  describe('Get', () => {
    it('should get a single value in local storage', () => {
      localStorage.setItem('folklore', JSON.stringify('evermore'));
      expect(localStorageService.get('folklore')).toBe('evermore');
    });
    it('should get an object value in local storage', () => {
      const myObject = { value: 1 };
      localStorage.setItem('folklore', JSON.stringify(myObject));
      expect(localStorageService.get('folklore')).toEqual(myObject);
    });
    it('should return null when a given key is not setted', () => {
      expect(localStorageService.get('evermore')).toBeNull();
    });
    it('should throw error when no key is provided to get', () => {
      expect(() => {
        localStorageService.get('');
      }).toThrowError('Error getting data in localStorage: key not provided');
    });
  });
  describe('Remove', () => {
    it('should remove a value from local storage', () => {
      localStorage.setItem('folklore', 'evermore');
      expect(localStorage.getItem('folklore')).toBe('evermore');
      localStorageService.remove('folklore');
      expect(localStorage.getItem('folklore')).toBeNull();
    });
    it('should throw error when no key is provided to remove', () => {
      expect(() => {
        localStorageService.remove('');
      }).toThrowError('Error removing data in localStorage: key not provided');
    });
  });
  describe('Clear', () => {
    it('should clear all values from local storage', () => {
      ['folklore', 'evermore', 'woodvale'].forEach((value) => {
        localStorage.setItem(value, value);
      });
      expect(localStorage.length).toBe(3);
      localStorageService.clear();
      expect(localStorage.length).toBe(0);
    });
  });
});
