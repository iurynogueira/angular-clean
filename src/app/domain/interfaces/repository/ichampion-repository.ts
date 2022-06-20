import { Observable } from 'rxjs';
import { ChampionEntity } from '../../entities/champion/champion-entity';

export abstract class IChampionRepository {
  abstract getAll(): Observable<ChampionEntity[]>;
}
