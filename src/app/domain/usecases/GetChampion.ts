import ServiceFactory from 'src/app/infra/factory/ServiceFactory';
import ChampionService from 'src/app/services/ChampionService';
import { ChampionEntity } from '../entities/champion/champion-entity';

export default class GetChampion {
  championService: ChampionService;

  constructor(readonly serviceFactory: ServiceFactory) {
    this.championService = serviceFactory.createChampionService();
  }

  private selectChampion(): number {
    return 2;
  }

  async execute(): Promise<ChampionEntity> {
    const promise = await this.championService.list();
    return promise[this.selectChampion()];
  }
}
