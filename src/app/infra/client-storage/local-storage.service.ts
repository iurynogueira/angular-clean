import { Injectable } from '@angular/core';
import IClientStorage from './iclient-storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements IClientStorage {
  set(key: string, data: unknown): unknown {
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

  get(key: string): unknown {
    if (key) {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    }
    throw new Error('Error getting data in localStorage: key not provided');
  }

  remove(key: string): unknown {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
}
