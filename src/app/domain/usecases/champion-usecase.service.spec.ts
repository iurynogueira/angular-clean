import { TestBed, waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { IClientStorage } from 'src/app/infra/client-storage/iclient-storage';
import { LocalStorageService } from 'src/app/infra/client-storage/local-storage.service';
import championMock from 'src/app/mock/champion-mock';
import { ChampionEntity } from '../entities/champion/champion-entity';
import { IChampionRepository } from '../interfaces/repository/ichampion-repository';
import { ChampionUseCaseService } from './champion-usecase.service';

describe('Service: ChampionUsecase', () => {
  let service: ChampionUseCaseService;
  const localStorageService = new LocalStorageService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChampionUseCaseService,
        {
          provide: IChampionRepository,
          useValue: {
            getAll: () => {
              return new Observable<ChampionEntity[]>((subscribe) => {
                subscribe.next([
                  new ChampionEntity(championMock()),
                  new ChampionEntity(championMock()),
                ]);
              });
            },
          },
        },
        {
          provide: IClientStorage,
          useValue: {
            set: localStorage.setItem('champions', JSON.stringify({pickedChampion: 'Aatrox'}))
          }
        }
      ],
    });
    service = TestBed.inject(ChampionUseCaseService);
    TestBed.inject(IChampionRepository);
    TestBed.inject(IClientStorage);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
  it('should return a champion', () => {
    expect(service.randomizeChampion()).toBeInstanceOf(Observable<ChampionEntity>);
  });
  it('should save champion key on local storage', waitForAsync(() => {
    const randomChampionObservable = service.randomizeChampion();
    let randomChampion, pickedChampion;
    randomChampionObservable.subscribe((champion) => {
      randomChampion = champion.name;
      pickedChampion = localStorageService.get('champions').pickedChampion;
    })
    expect(randomChampion).toEqual('Aatrox');
    expect(pickedChampion).toBe(randomChampion);
  }));
  it('should create a champion that is not one of the last champions', () => {
    const championPromise = service.randomizeChampion();
    const { lastChampions } = localStorageService.get('champions');
    expect(Array.isArray(lastChampions)).toBeTruthy();
    expect(
      lastChampions.includes(
        championPromise.subscribe((champion) => {
          return champion.id;
        })
      )
    ).toBeFalsy();
  });
  it('should save a max number of five last champions on local storage', () => {
    for (let i = 0; i < 5; i++) {
      service.randomizeChampion();
    }
    let { lastChampions } = localStorageService.get('champions');
    expect(lastChampions).toHaveLength(5);
    service.randomizeChampion();
    lastChampions = localStorageService.get('champions').lastChampions;
    expect(lastChampions).toHaveLength(5);
  });
});
