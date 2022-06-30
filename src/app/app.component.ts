import { Component, OnInit } from '@angular/core';
import ChampionController from './controller/ChampionController';
import { ChampionEntity } from './domain/entities/champion/champion-entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public champions: ChampionEntity[] = [];
  public championSelected!: ChampionEntity;
  public hintResult = {};

  private championController = new ChampionController();

  async hint() {
    // const compareResult = this.championSelected.compareWith(this.championSelected);
    const result = await this.championController.hint(this.championSelected);
    console.log('result ->', result);
    this.hintResult = result;
  }

  async ngOnInit() {
    // const serviceFactory = new ServiceFactoryHttp(
    //   new AxiosAdapter(),
    //   environment.serverUrl
    // );
    // const championService = serviceFactory.createChampionService();

    // mock new game
    localStorage.setItem(
      'champions',
      JSON.stringify({
        lastChampions: [],
        pickedChampion: 'Ezreal',
      })
    );

    const championService = this.championController.getService();
    this.champions = await championService.list();
    this.championSelected = this.champions[0];
  }
}
