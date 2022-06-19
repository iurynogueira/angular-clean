import { ChampionEntity } from './champion-entity';

const champion = {
  name: 'Aatrox',
  key: '266',
  tags: ['Fighter', 'Tank'],
  stats: {
    hp: 650,
    armor: 38,
    attackdamage: 60,
    attackspeed: 0.651,
  },
};
const sut = (): ChampionEntity => {
  return new ChampionEntity(champion);
};

describe('', () => {
  it('should create instance', () => {
    expect(sut()).toBeTruthy();
  });

  it('should validate name', () => {
    expect(sut().name).toBe(champion.name);
  });

  it('should validate key', () => {
    expect(sut().id).toBe(champion.key);
  });

  it('should validate tags', () => {
    expect(sut().tags).toEqual(champion.tags);
  });

  it('should validate stats', () => {
    expect(sut().stats).toEqual(champion.stats);
  });
});
