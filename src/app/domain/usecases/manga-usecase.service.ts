import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MangaEntity } from "../entities/manga/manga-entity";
import { IMangaRepository } from "../interfaces/repository/imanga-repository";
import { IMangaUsecase } from "../interfaces/usecases/imanga-usecase";

@Injectable({
  providedIn: 'root'
})
export class MangaUsecaseService implements IMangaUsecase {
  constructor(
    private mangaRepository: IMangaRepository
  ) {}

  get(id: number): Observable<MangaEntity> {
    return this.mangaRepository.get(id);
  }
}
