import { Component, OnInit } from '@angular/core';
import ChampionController from 'src/app/controller/ChampionController';
import { ChampionEntity } from 'src/app/domain/entities/champion/champion-entity';

interface ResultHint {
  result: boolean;
  armor: string;
  attackdamage: string;
  attackspeed: string;
  hp: string;
  tag: boolean;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private championController = new ChampionController();

  public champions: ChampionEntity[] = [];
  public championSelected!: ChampionEntity;
  public result!: ResultHint;

  async hint() {
    this.result = await this.championController.hint(this.championSelected);
  }

  async ngOnInit() {
    this.champions = await this.championController.getService().list();
    this.championSelected = this.champions[0];
  }
}
