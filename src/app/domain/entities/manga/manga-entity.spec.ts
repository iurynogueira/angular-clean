import { MangaEntity } from './manga-entity';

const sut = ():MangaEntity => {
  return new MangaEntity({
    name: 'one piece',
    total_pages: 1000,
  });
};

describe('Mangá', () => {
  it('should create instance mangá entity', () => {
    expect(sut()).toBeTruthy();
  });

  it('should add bookmark in mangá', () => {
    const manga = sut();
    manga.bookmarkPage(30);
    expect(manga.actual_page).toBe(30);
  });
});
