import { DomainEntity } from '../base/domain-entity';

export interface ChampionProps {
  name: string;
  key: string;
  tags: string[];
  stats: StatsChampion;
}
interface StatsChampion {
  hp: number;
  armor: number;
  attackdamage: number;
  attackspeed: number;
}
export class ChampionEntity extends DomainEntity {
  public readonly name!: string;
  public readonly tags!: string[];
  public readonly stats!: StatsChampion;

  constructor(championsProps: ChampionProps) {
    super();
    const { name, stats, tags, key }: ChampionProps = championsProps;
    this.id = key;
    this.name = name;
    this.stats = stats;
    this.tags = tags;
  }
}