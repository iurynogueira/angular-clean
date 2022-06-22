import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import ServiceFactoryHttp from './infra/factory/ServiceFactoryHttp';
import AxiosAdapter from './infra/http/AxiosAdapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    const serviceFactory = new ServiceFactoryHttp(new AxiosAdapter(), environment.serverUrl)
    const championService = serviceFactory.createChampionService()
    const champions = await championService.list()
  }
}
