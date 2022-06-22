import RepositoryFactory from 'src/app/domain/factory/RepositoryFactory';
import IChampionRepository from 'src/app/domain/interfaces/repository/ichampion-repository';
import ChampionRepositoryMemory from '../repository/memory/ChampionRepositoryMemory';

export default class MemoryRepositoryFactory implements RepositoryFactory {
  createChampionRepository(): IChampionRepository {
    return new ChampionRepositoryMemory();
  }
}
