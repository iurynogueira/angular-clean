import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IMangaUsecase } from './interfaces/usecases/imanga-usecase';
import { MangaUsecaseService } from './usecases/manga-usecase.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: IMangaUsecase, useClass: MangaUsecaseService }],
})
export class DomainModule {}
