import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChampionEntity } from 'src/app/domain/entities/champion/champion-entity';
import { IChampionRepository } from 'src/app/domain/interfaces/repository/ichampion-repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChampionRepositoryService implements IChampionRepository {
  constructor(private http: HttpClient) {}

  mapperToObject(champion: ChampionEntity, key: string) {
    return new ChampionEntity({ key, ...champion });
  }

  getAll(): Observable<ChampionEntity[]> {
    return this.http
      .get<{ data: { [championName: string]: ChampionEntity } }>(
        environment.serverUrl + '/champion.json'
      )
      .pipe(
        map(({ data }) =>
          Object.keys(data).map((key: string) => {
            return this.mapperToObject(data[key], key);
          })
        )
      );
  }
}
