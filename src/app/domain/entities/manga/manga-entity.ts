import { DomainEntity } from '../base/domain-entity';

interface MangaProps {
  name: string;
  total_pages: number;
}

export class MangaEntity extends DomainEntity {
  name!: string;
  total_pages!: number;
  actual_page?: number;

  constructor(mangaProps: MangaProps) {
    super();

    this.name = mangaProps.name;
    this.total_pages = mangaProps.total_pages;
  }

  bookmarkPage(page: number) {
    this.actual_page = page;
  }
}
