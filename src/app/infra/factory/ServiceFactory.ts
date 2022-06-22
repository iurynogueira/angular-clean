import ChampionService from 'src/app/services/ChampionService';

export default interface ServiceFactory {
  createChampionService(): ChampionService;
}
