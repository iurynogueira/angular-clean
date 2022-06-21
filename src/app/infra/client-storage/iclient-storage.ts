import { SafeAny } from 'src/safeAny';

export default interface IClientStorage {
  set(key: string, data: SafeAny): void;
  get(key: string): SafeAny;
  remove(key: string): void;
  clear(): void;
}
