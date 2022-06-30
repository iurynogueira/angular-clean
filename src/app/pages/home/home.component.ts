import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ChampionController from 'src/app/controller/ChampionController';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private championController = new ChampionController();

  constructor(private router: Router) {}

  public async startGame() {
    await this.championController.getNewChampion();
    this.router.navigate(['/game']);
  }
}
