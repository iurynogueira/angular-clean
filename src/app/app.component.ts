import { Component, OnInit } from '@angular/core';
import { MangaRepositoryService } from './data/repository/manga/manga-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mangas';

  constructor(private manga: MangaRepositoryService) {}

  ngOnInit() {
    this.manga.get(1).subscribe();
  }
}
