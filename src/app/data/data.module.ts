import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IMangaRepository } from '../domain/interfaces/repository/imanga-repository';
import { MangaRepositoryService } from './repository/manga/manga-repository.service';
import { IChampionRepository } from '../domain/interfaces/repository/ichampion-repository';
import { ChampionRepositoryService } from './repository/champion/champion-repository.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: IMangaRepository, useClass: MangaRepositoryService },
    { provide: IChampionRepository, useClass: ChampionRepositoryService }
  ],
})
export class DataModule {}
