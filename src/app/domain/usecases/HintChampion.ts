import { IClientStorage } from 'src/app/infra/client-storage/iclient-storage';
import ServiceFactory from 'src/app/infra/factory/ServiceFactory';
import ChampionService from 'src/app/services/ChampionService';
import { SafeAny } from 'src/safeAny';
import { ChampionEntity } from '../entities/champion/champion-entity';

export default class HintChampion {
  championService: ChampionService;

  constructor(
    readonly localStorageService: IClientStorage,
    readonly serviceFactory: ServiceFactory
  ) {
    this.championService = serviceFactory.createChampionService();
  }

  isSameChampion(championName: string, lastChampions: SafeAny) {
    return championName === lastChampions.pickedChampion;
  }

  async execute(input: Input): Promise<Output> {
    const lastChampions = this.localStorageService.get('champions');
    const champions = await this.championService.list();
    const pickedChampion = champions.filter((champion) =>
      this.isSameChampion(champion.name, lastChampions)
    )[0];
    const resultCompare = input.champion.compareWith(pickedChampion);

    return {
      result: pickedChampion.name === input.champion.name,
      ...resultCompare,
    };
  }
}

type Input = {
  champion: ChampionEntity;
};

type Output = {
  result: boolean;
  armor: string;
  attackdamage: string;
  attackspeed: string;
  hp: string;
  tag: boolean;
};
