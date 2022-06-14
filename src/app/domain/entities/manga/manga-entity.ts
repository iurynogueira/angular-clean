import { DomainEntity } from '../base/domain-entity';

export class MangaEntity extends DomainEntity {
  name!: string;
  pages!: number;
}
