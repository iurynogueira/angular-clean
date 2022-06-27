import { LocalStorageService } from 'src/app/infra/client-storage/local-storage.service';
import ServiceFactory from 'src/app/infra/factory/ServiceFactory';
import ServiceFactoryHttp from 'src/app/infra/factory/ServiceFactoryHttp';
import AxiosAdapter from 'src/app/infra/http/AxiosAdapter';
import { championMock } from 'src/app/mock';
import { championMockEzreal } from 'src/app/mock/championMockEzreal';
import { environment } from 'src/environments/environment';
import {
  ChampionEntity,
  ChampionProps,
  CompareState,
} from '../entities/champion/champion-entity';
import HintChampion from './HintChampion';

let hintChampion: HintChampion;
let localStorageService: LocalStorageService;
let serviceFactory: ServiceFactory;

const mockChampionInLocal = {
  lastChampions: [],
  pickedChampion: championMockEzreal().name,
};

const execute = async (championMock: ChampionProps) => {
  return await hintChampion.execute({
    champion: new ChampionEntity(championMock),
  });
};

beforeEach(() => {
  localStorageService = new LocalStorageService();
  serviceFactory = new ServiceFactoryHttp(
    new AxiosAdapter(),
    environment.serverUrl
  );
  hintChampion = new HintChampion(localStorageService, serviceFactory);
  localStorageService.set('champions', mockChampionInLocal);
});

describe('HintChampion', () => {
  it('should return failure when the champions its not equal', async () => {
    expect(await execute(championMock())).toEqual({
      result: false,
      armor: CompareState.Bigger,
      attackdamage: CompareState.Equal,
      attackspeed: CompareState.Bigger,
      hp: CompareState.Bigger,
      tag: false,
    });
  });

  it('should return successe when the champions its equal', async () => {
    expect(await execute(championMockEzreal())).toEqual({
      result: true,
      armor: CompareState.Equal,
      attackdamage: CompareState.Equal,
      attackspeed: CompareState.Equal,
      hp: CompareState.Equal,
      tag: true,
    });
  });

  afterAll(() => {
    localStorageService.clear();
  });
});
