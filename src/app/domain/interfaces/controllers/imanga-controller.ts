import { Observable } from 'rxjs';
import { MangaEntity } from '../../entities/manga/manga-entity';

export abstract class IMangaController {
  abstract get(id: number): Observable<MangaEntity>;
  abstract getAll(): Observable<MangaEntity>;
}
