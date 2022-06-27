import { SafeAny } from 'src/safeAny';
import { IClientStorage } from './iclient-storage';

export class LocalStorageService implements IClientStorage {
  set(key: string, data: SafeAny) {
    if (key) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (error) {
        throw new Error(`Error saving to localStorage: ${error}`);
      }
      return;
    }
    throw new Error('Error saving to localStorage: key not provided');
  }

  get(key: string): SafeAny {
    if (key) {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    }
    throw new Error('Error getting data in localStorage: key not provided');
  }

  remove(key: string) {
    if (key) {
      localStorage.removeItem(key);
      return;
    }
    throw new Error('Error removing data in localStorage: key not provided');
  }

  clear() {
    localStorage.clear();
  }
}
