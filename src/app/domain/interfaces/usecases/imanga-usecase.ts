import { Observable } from 'rxjs';
import { MangaEntity } from '../../entities/manga/manga-entity';

export abstract class IMangaUsecase {
  abstract get(id: number): Observable<MangaEntity>;
}
