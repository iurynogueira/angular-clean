import { ChampionEntity } from '../entities/champion/champion-entity';
import RepositoryFactory from '../factory/RepositoryFactory';
import IChampionRepository from '../interfaces/repository/ichampion-repository';

export default class GetChampion {
  championRepository: IChampionRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.championRepository = repositoryFactory.createChampionRepository();
  }

  private selectChampion(): number {
    return 2;
  }

  async execute(): Promise<ChampionEntity> {
    const promise = await this.championRepository.getAll();
    return promise[this.selectChampion()];
  }
}
