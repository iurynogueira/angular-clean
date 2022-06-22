import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IClientStorage } from 'src/app/infra/client-storage/iclient-storage';
import { ChampionEntity } from '../entities/champion/champion-entity';
import { IChampionRepository } from '../interfaces/repository/ichampion-repository';
import { IChampionUseCase } from '../interfaces/usecases/champion-usecase';

@Injectable({
  providedIn: 'root',
})
export class ChampionUseCaseService implements IChampionUseCase {
  constructor(
    private championRepository: IChampionRepository,
    private localStorageService: IClientStorage
  ) {}

  savePickedChampion(champion: ChampionEntity): void {
    this.localStorageService.set('champions', {
      pickedChampion: champion.name,
    });
    return;
  }

  randomizeChampion(): Observable<ChampionEntity> {
    return this.championRepository.getAll().pipe(
      map((champions) => {
        this.savePickedChampion(champions[0]);
        return champions[0];
      })
    );
  }
}
