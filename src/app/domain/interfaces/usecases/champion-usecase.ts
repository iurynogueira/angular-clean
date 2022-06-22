import { Observable } from 'rxjs';
import { ChampionEntity } from '../../entities/champion/champion-entity';

export abstract class IChampionUseCase {
  abstract randomizeChampion(): Observable<ChampionEntity>;
}
