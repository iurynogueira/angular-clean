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
    const { name, total_pages } = mangaProps;
    this.name = name;
    this.total_pages = total_pages;
  }

  bookmarkPage(page: number) {
    this.actual_page = page;
  }
}
