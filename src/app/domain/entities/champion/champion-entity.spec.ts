import championMock from 'src/app/mock/champion-mock';
import { ChampionEntity } from './champion-entity';

const sut = (): ChampionEntity => {
  return new ChampionEntity(championMock());
};

describe('Champion Entity', () => {
  it('should create instance', () => {
    expect(sut()).toBeTruthy();
  });

  it('should validate name', () => {
    expect(sut().name).toBe(championMock().name);
  });

  it('should validate key', () => {
    expect(sut().id).toBe(championMock().key);
  });

  it('should validate tags', () => {
    expect(sut().tags).toEqual(championMock().tags);
  });

  it('should validate stats', () => {
    expect(sut().stats).toEqual(championMock().stats);
  });
});
