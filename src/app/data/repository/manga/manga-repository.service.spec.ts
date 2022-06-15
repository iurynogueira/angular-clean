import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MangaEntity } from 'src/app/domain/entities/manga/manga-entity';
import { environment } from 'src/environments/environment';
import { MangaRepositoryService } from './manga-repository.service';

describe('MangaRepositoryService', () => {
  let service: MangaRepositoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MangaRepositoryService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected manga by index', (done) => {
    const expectedData = new MangaEntity({
      name: 'One Piece',
      total_pages: 1000,
    });

    service.get(1).subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      `${environment.serverUrl}/mangas/1`
    );
    testRequest.flush(expectedData);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
