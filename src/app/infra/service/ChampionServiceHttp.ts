import { ChampionEntity } from 'src/app/domain/entities/champion/champion-entity';
import Http from '../http/http';

export default class ChampionServiceHttp {
  constructor(readonly http: Http, readonly baseUrl: string) {}

  async list(): Promise<ChampionEntity[]> {
    const championsData = await this.http.get(this.baseUrl + '/champion.json');
    const champions: ChampionEntity[] = [];
    for (const champion of Object.keys(championsData.data)) {
      const { key, name, stats, tags } = championsData.data[champion];
      champions.push(
        new ChampionEntity({
          key,
          name,
          stats,
          tags,
        })
      );
    }
    return champions;
  }
}
