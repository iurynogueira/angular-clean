import { ChampionEntity } from '../../entities/champion/champion-entity';

export default interface IChampionRepository {
  getAll(): Promise<ChampionEntity[]>;
}
