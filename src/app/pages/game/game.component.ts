import { Component, OnInit } from '@angular/core';
import ChampionController from 'src/app/controller/ChampionController';
import { ChampionEntity } from 'src/app/domain/entities/champion/champion-entity';
import HintChampion from 'src/app/domain/usecases/HintChampion';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private championController = new ChampionController();

  public champions: ChampionEntity[] = [];
  public championSelected!: ChampionEntity;

  async hint() {
    const result = await this.championController.hint(this.championSelected);
    console.log('result ->', result);
  }

  async ngOnInit() {
    this.champions = await this.championController.getService().list();
    this.championSelected = this.champions[0];
  }
}
