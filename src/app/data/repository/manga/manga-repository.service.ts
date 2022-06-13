import { IMangaRepository } from "src/app/domain/interfaces/repository/imanga-repository";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { MangaEntity } from "src/app/domain/entities/manga/manga-entity";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MangaRepositoryService implements IMangaRepository {
  constructor(private http: HttpClient) {}

  // TODO: add pipe map to mapper
  get(id: number): Observable<MangaEntity> {
    return this.http.get<MangaEntity>(environment.serverUrl + '/mangas/' + id)
  }
}
