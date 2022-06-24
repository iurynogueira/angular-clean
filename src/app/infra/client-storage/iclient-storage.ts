import { SafeAny } from 'src/safeAny';

export abstract class IClientStorage {
  abstract set(key: string, data: SafeAny): void;
  abstract get(key: string): SafeAny;
  abstract remove(key: string): void;
  abstract clear(): void;
}
