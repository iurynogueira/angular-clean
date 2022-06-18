export default interface IClientStorage {
  set(key: string, data: unknown): unknown;
  get(key: string): unknown;
  remove(key: string): unknown;
  clear(): void;
}
