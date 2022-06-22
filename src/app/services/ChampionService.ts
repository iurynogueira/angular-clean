import { ChampionEntity } from '../domain/entities/champion/champion-entity';

export default interface ChampionService {
  list(): Promise<ChampionEntity[]>;
}
