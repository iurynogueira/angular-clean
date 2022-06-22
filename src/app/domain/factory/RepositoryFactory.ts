import IChampionRepository from '../interfaces/repository/ichampion-repository';

export default interface RepositoryFactory {
  createChampionRepository(): IChampionRepository;
}
