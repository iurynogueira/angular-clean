import { Observable } from 'rxjs';
import { MangaEntity } from '../../entities/manga/manga-entity';

export abstract class IMangaRepository {
  abstract get(id: string): Observable<MangaEntity>;
}
