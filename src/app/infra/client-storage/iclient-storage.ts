export default interface IClientStorage {
  set(key: string, data: unknown): void;
  get(key: string): unknown;
  remove(key: string): void;
  clear(): void;
}
