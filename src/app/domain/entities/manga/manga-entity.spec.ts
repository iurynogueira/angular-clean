import { MangaEntity } from './manga-entity';

describe('Mangá', () => {
  it('should create instance mangá entity', () => {
    const manga = new MangaEntity({
      name: 'one piece',
      total_pages: 1000,
    });
    expect(manga).toBeTruthy();
  });

  it('should add bookmark in mangá', () => {
    const manga = new MangaEntity({
      name: 'one piece',
      total_pages: 1000,
    });

    manga.bookmarkPage(30);
    expect(manga.actual_page).toBe(30);
  });
});
