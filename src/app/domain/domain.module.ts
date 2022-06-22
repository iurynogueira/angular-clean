import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IChampionUseCase } from './interfaces/usecases/champion-usecase';
import { IMangaUsecase } from './interfaces/usecases/imanga-usecase';
import { ChampionUseCaseService } from './usecases/champion-usecase.service';
import { MangaUsecaseService } from './usecases/manga-usecase.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: IMangaUsecase, useClass: MangaUsecaseService },
    { provide: IChampionUseCase, useClass: ChampionUseCaseService },
  ],
})
export class DomainModule {}
