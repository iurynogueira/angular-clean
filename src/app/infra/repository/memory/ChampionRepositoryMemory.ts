import { ChampionEntity } from 'src/app/domain/entities/champion/champion-entity';
import IChampionRepository from 'src/app/domain/interfaces/repository/ichampion-repository';
import championMock from 'src/app/mock/champion-mock';

export default class ChampionRepositoryMemory implements IChampionRepository {
  champions: ChampionEntity[];

  constructor() {
    this.champions = [
      new ChampionEntity(championMock()),
      new ChampionEntity(championMock()),
      new ChampionEntity(championMock()),
    ];
  }

  async getAll(): Promise<ChampionEntity[]> {
    return this.champions;
  }
}
