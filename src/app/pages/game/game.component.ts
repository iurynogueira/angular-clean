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

enum TypeState {
  hp = 'hp',
  armor = 'armor',
  attackdamage = 'attackdamage',
  attackspeed = 'attackspeed',
  result = 'result',
  tag = 'tag',
}

enum ResultType {
  down = '↓',
  up = '↑',
  eq = '=',
  wrong = 'x',
  correct = '✓',
}

enum ResultCase {
  bigger = 'bigger',
  smaller = 'smaller',
  equal = 'equal',
}

interface ResultItem {
  key: string;
  correct: boolean;
  icon: ResultType;
  label: string;
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

  private namesKeys = {
    armor: 'Armor',
    hp: 'HP',
    attackdamage: 'Atk Dmg',
    attackspeed: 'Atk Speed',
    result: 'result',
    tag: 'tag',
  };

  private icons = {
    bigger: ResultType.up,
    smaller: ResultType.down,
    equal: ResultType.correct,
  };

  formatValues(): ResultItem[] {
    const resultFormated: ResultItem[] = [];

    Object.keys(this.result).forEach((resultItem) => {
      const resultValue = this.result[resultItem as TypeState];
      if (typeof resultValue !== 'boolean') {
        resultFormated.push({
          key: resultItem,
          correct: resultValue === 'equal',
          icon: this.icons[resultValue as ResultCase],
          label: this.namesKeys[resultItem as TypeState],
        });
      }

      if (resultItem === 'tag') {
        resultFormated.push({
          key: resultItem,
          correct: resultValue as boolean,
          icon: resultValue ? ResultType.correct : ResultType.wrong,
          label: 'Type',
        });
      }
    });
    return resultFormated;
  }

  async hint() {
    this.result = await this.championController.hint(this.championSelected);
  }

  async ngOnInit() {
    this.champions = await this.championController.getService().list();
    this.championSelected = this.champions[0];
  }
}
