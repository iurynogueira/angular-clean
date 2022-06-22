import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IMangaRepository } from '../domain/interfaces/repository/imanga-repository';
import { MangaRepositoryService } from './repository/manga/manga-repository.service';
import { ChampionRepositoryService } from './repository/champion/champion-repository.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: IMangaRepository, useClass: MangaRepositoryService },
    ChampionRepositoryService,
  ],
})
export class DataModule {}
