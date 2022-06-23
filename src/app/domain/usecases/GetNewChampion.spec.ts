import { LocalStorageService } from 'src/app/infra/client-storage/local-storage.service';
import ServiceFactory from 'src/app/infra/factory/ServiceFactory';
import ServiceFactoryHttp from 'src/app/infra/factory/ServiceFactoryHttp';
import AxiosAdapter from 'src/app/infra/http/AxiosAdapter';
import { environment } from 'src/environments/environment';
import { ChampionEntity } from '../entities/champion/champion-entity';
import GetNewChampion from './GetNewChampion';

let serviceFactory: ServiceFactory;

beforeEach(() => {
  serviceFactory = new ServiceFactoryHttp(
    new AxiosAdapter(),
    environment.serverUrl
  );
});

describe('GetNewChampion Usecase', () => {
  let getNewChampion: GetNewChampion;
  let champion: ChampionEntity;
  const localStorageService = new LocalStorageService();

  beforeEach(async () => {
    getNewChampion = new GetNewChampion(serviceFactory, localStorageService);
    champion = await getNewChampion.execute();
  });

  it.skip('should return an instance of champion', async () => {
    expect(champion).toBeInstanceOf(ChampionEntity);
  });
  it.skip('should save champion key on local storage', () => {
    const pickedChampion = localStorageService.get('champions').pickedChampion;
    expect(pickedChampion).toBe(champion.name);
  });
  it.skip('should start with no last champions saved', () => {
    const { lastChampions } = localStorageService.get('champions');
    expect(lastChampions.length).toBe(0);
  });
  it('should create a champion that is not one of the last champions', async () => {
    GetNewChampion.prototype.getRandomNumberByLength = jest
      .fn()
      .mockImplementation(() => {
        return Math.floor(Math.random() * 5);
      });
    for (let i = 0; i < 10; i++) {
      champion = await getNewChampion.execute();
      const { lastChampions } = localStorageService.get('champions');
      expect(Array.isArray(lastChampions)).toBeTruthy();
      expect(lastChampions.includes(champion.name)).toBeFalsy();
    }
  });
  it.skip('should save last champion before generating a new champion', async () => {
    let lastChampions = localStorageService.get('champions').lastChampions;
    const pickedChampion = localStorageService.get('champions').pickedChampion;
    expect(lastChampions.length).toBe(0);
    await getNewChampion.execute();
    lastChampions = localStorageService.get('champions').lastChampions;
    expect(lastChampions.includes(pickedChampion)).toBeTruthy();
  });
  it.skip('should save a max number of five last champions on local storage', async () => {
    for (let i = 0; i < 5; i++) {
      champion = await getNewChampion.execute();
    }
    let { lastChampions } = localStorageService.get('champions');
    expect(lastChampions).toHaveLength(5);

    getNewChampion.execute();
    lastChampions = localStorageService.get('champions').lastChampions;
    expect(lastChampions).toHaveLength(5);
  });

  afterEach(() => {
    localStorageService.clear();
  });
});
