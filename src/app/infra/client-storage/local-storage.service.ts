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

  get(key: string): string {
    throw new Error('Method not implemented.');
  }
  remove(key: string): void {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
}
