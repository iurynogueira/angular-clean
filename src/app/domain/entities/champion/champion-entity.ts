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

enum TypeState {
  hp = 'hp',
  armor = 'armor',
  attackdamage = 'attackdamage',
  attackspeed = 'attackspeed',
}

export enum CompareState {
  Equal = 'equal',
  Smaller = 'smaller',
  Bigger = 'bigger',
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

  compareState(statsKey: TypeState, stateOtherChampion: number): CompareState {
    if (stateOtherChampion === this.stats[statsKey]) {
      return CompareState.Equal;
    } else if (stateOtherChampion > this.stats[statsKey]) {
      return CompareState.Smaller;
    } else {
      return CompareState.Bigger;
    }
  }

  hasTag(tasgOtherChampion: string[]): boolean {
    let tagInArray = false;
    tasgOtherChampion.forEach((tag) => {
      if (this.tags.includes(tag)) {
        tagInArray = true;
      }
    });
    return tagInArray;
  }

  public compareWith(otherChampion: ChampionEntity) {
    const outputStats = {
      armor: '',
      attackdamage: '',
      attackspeed: '',
      hp: '',
    };

    const attributes = Object.keys(outputStats);
    (attributes as TypeState[]).forEach((key) => {
      outputStats[key] = this.compareState(key, otherChampion.stats[key]);
    });

    return {
      ...outputStats,
      tag: this.hasTag(otherChampion.tags),
    };
  }
}
