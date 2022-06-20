import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ChampionEntity } from 'src/app/domain/entities/champion/champion-entity';
import championMock from 'src/app/mock/champion-mock';
import { environment } from 'src/environments/environment';
import { ChampionRepositoryService } from './champion-repository.service';

describe('ChampionRepositoryService', () => {
  let service: ChampionRepositoryService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChampionRepositoryService]
    });
    controller = TestBed.get(HttpTestingController);
    service = TestBed.get(ChampionRepositoryService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of champions', async () => {
    let dumbChampions: ChampionEntity[] = [];
    service.getAll()
      .subscribe(
        response => {
          dumbChampions = response;
        }
      );

    const request = controller.expectOne(`${environment.serverUrl}/champion.json`)
    request.flush({data: {Aatrox: championMock() }});
    expect(dumbChampions.length).toBe(1);
    expect(dumbChampions[0].name).toBe(championMock().name);
    expect(dumbChampions[0]).toBeInstanceOf(ChampionEntity);
  });

  afterEach(() => {
    controller.verify();
  });
});
