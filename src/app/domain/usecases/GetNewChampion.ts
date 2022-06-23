import { IClientStorage } from 'src/app/infra/client-storage/iclient-storage';
import ServiceFactory from 'src/app/infra/factory/ServiceFactory';
import ChampionService from 'src/app/services/ChampionService';
import { ChampionEntity } from '../entities/champion/champion-entity';

interface ChampionStorage {
  pickedChampion: string;
  lastChampions: string[];
}

export default class GetNewChampion {
  championService: ChampionService;
  lastChampions: string[] = [];

  constructor(
    readonly serviceFactory: ServiceFactory,
    readonly localStorageService: IClientStorage
  ) {
    this.championService = serviceFactory.createChampionService();
  }

  private validateChampionsOnLocal(): boolean {
    return this.localStorageService.get('champions');
  }

  public getRandomNumberByLength(length: number): number {
    const random = Math.floor(Math.random() * (length + 1));
    return random;
  }

  private getPickedChampion(): string {
    return this.validateChampionsOnLocal()
      ? this.localStorageService.get('champions').pickedChampion
      : '';
  }

  private getLastFiveChampions(): string[] {
    return this.validateChampionsOnLocal()
      ? this.localStorageService.get('champions').lastChampions
      : [];
  }

  private saveOnLocal(key: string) {
    const toSave: ChampionStorage = {
      pickedChampion: key,
      lastChampions: this.lastChampions.slice(0, 5),
    };
    this.localStorageService.set('champions', toSave);
  }

  private championAlreadyPicked(name: string): boolean {
    return (
      this.getPickedChampion() === name || this.lastChampions.includes(name)
    );
  }

  private getValidPosition(
    position: number,
    champions: ChampionEntity[]
  ): number {
    if (this.championAlreadyPicked(champions[position].name)) {
      const newPosition = this.getRandomNumberByLength(champions.length);
      return this.getValidPosition(newPosition, champions);
    }
    return position;
  }

  async execute(): Promise<ChampionEntity> {
    const lastPickedChampion = this.getPickedChampion();

    if (lastPickedChampion) {
      this.lastChampions = [lastPickedChampion, ...this.getLastFiveChampions()];
    } else {
      this.lastChampions = [...this.getLastFiveChampions()];
    }

    const champions = await this.championService.list();

    const position = this.getValidPosition(
      this.getRandomNumberByLength(champions.length),
      champions
    );

    this.saveOnLocal(champions[position].name);

    return champions[position];
  }
}
