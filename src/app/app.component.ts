import { Component, OnInit } from '@angular/core';
import { ChampionRepositoryService } from './data/repository/champion/champion-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private championService: ChampionRepositoryService) {}

  ngOnInit() {
    this.championService.getAll().subscribe();
  }
}
