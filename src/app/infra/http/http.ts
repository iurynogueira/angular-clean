import { SafeAny } from 'src/safeAny';

export default interface Http {
  get(url: string): Promise<SafeAny>;
  post(url: string, data: SafeAny): Promise<SafeAny>;
}
