import { ChampionEntity } from './champion-entity';

const sut = (): ChampionEntity => {
  return new ChampionEntity({
    name: 'Aatrox',
    key: '266',
    tags: ['Fighter', 'Tank'],
    stats: {
      hp: 650,
      armor: 38,
      attackdamage: 60,
      attackspeed: 0.651,
    },
  });
};

describe('', () => {
  it('should create instance', () => {
    expect(sut()).toBeTruthy();
  });

  it('should validate name', () => {
    expect(sut().name).toBe('Aatrox');
  });

  it('should validate key', () => {
    expect(sut().id).toBe('266');
  });

  it('should validate tags', () => {
    expect(sut().tags).toEqual(['Fighter', 'Tank']);
  });

  it('should validate stats', () => {
    const stats = {
      hp: 650,
      armor: 38,
      attackdamage: 60,
      attackspeed: 0.651,
    };
    expect(sut().stats).toEqual(stats);
  });
});
