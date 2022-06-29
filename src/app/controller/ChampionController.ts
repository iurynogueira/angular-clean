import { environment } from 'src/environments/environment';
import { ChampionEntity } from '../domain/entities/champion/champion-entity';
import HintChampion from '../domain/usecases/HintChampion';
import { IClientStorage } from '../infra/client-storage/iclient-storage';
import { LocalStorageService } from '../infra/client-storage/local-storage.service';
import ServiceFactory from '../infra/factory/ServiceFactory';
import ServiceFactoryHttp from '../infra/factory/ServiceFactoryHttp';
import AxiosAdapter from '../infra/http/AxiosAdapter';
import Http from '../infra/http/http';
import ChampionService from '../services/ChampionService';

export default class ChampionController {
  http: Http;
  serviceFactory: ServiceFactory;
  storageService: IClientStorage;

  constructor() {
    this.http = new AxiosAdapter();
    this.serviceFactory = new ServiceFactoryHttp(
      this.http,
      environment.serverUrl
    );
    this.storageService = new LocalStorageService();
  }

  getService(): ChampionService {
    return this.serviceFactory.createChampionService();
  }

  async hint(champion: ChampionEntity) {
    const hintChampion = new HintChampion(
      this.storageService,
      this.serviceFactory
    );
    return await hintChampion.execute({ champion });
  }
}
