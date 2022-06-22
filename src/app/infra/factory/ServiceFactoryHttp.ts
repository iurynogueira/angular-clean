import ChampionService from "src/app/services/ChampionService";
import Http from "../http/http";
import ChampionServiceHttp from "../service/ChampionServiceHttp";
import ServiceFactory from "./ServiceFactory";

export default class ServiceFactoryHttp implements ServiceFactory {
  constructor(readonly http: Http, readonly baseUrl: string) {}

  createChampionService(): ChampionService {
    return new ChampionServiceHttp(this.http, this.baseUrl)
  }
}
