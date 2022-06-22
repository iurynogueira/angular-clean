import { Component, OnInit } from '@angular/core';
import { ChampionRepositoryService } from './data/repository/champion/champion-repository.service';
import GetChampion from './domain/usecases/GetChampion';
import MemoryRepositoryFactory from './infra/factory/MemoryRepositoryFactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    const factory = new MemoryRepositoryFactory();
    const getChampion = new GetChampion(factory);
    const champion = await getChampion.execute();
    console.log('champion ->', champion);
  }
}
