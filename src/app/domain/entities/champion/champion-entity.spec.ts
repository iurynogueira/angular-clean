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

  it('should compare with other champion and return the differences and witout tags', () => {
    const ezrealWithHp = new ChampionEntity({
      key: '81',
      name: 'Ezreal',
      stats: {
        armor: 24,
        attackdamage: 60,
        attackspeed: 0.625,
        hp: 900,
      },
      tags: ['Mage', 'Marksman'],
    });

    const volibear = new ChampionEntity({
      key: '106',
      name: 'Volibear',
      stats: {
        armor: 31,
        attackdamage: 60,
        attackspeed: 0.625,
        hp: 650,
      },
      tags: ['Fighter', 'Tank'],
    });

    expect(ezrealWithHp.compareWith(volibear)).toEqual({
      armor: 'smaller',
      attackdamage: 'equal',
      attackspeed: 'equal',
      hp: 'bigger',
      tag: false,
    });
  });

  it('should compare two champions with one same tag', () => {
    const ezrealWithHp = new ChampionEntity({
      key: '81',
      name: 'Ezreal',
      stats: {
        armor: 24,
        attackdamage: 60,
        attackspeed: 0.625,
        hp: 900,
      },
      tags: ['Marksman', 'Mage'],
    });

    const annie = new ChampionEntity({
      key: '106',
      name: 'Annie',
      stats: {
        armor: 19,
        attackdamage: 60,
        attackspeed: 0.625,
        hp: 650,
      },
      tags: ['Mage'],
    });

    expect(ezrealWithHp.compareWith(annie)).toEqual({
      armor: 'bigger',
      attackdamage: 'equal',
      attackspeed: 'equal',
      hp: 'bigger',
      tag: true,
    });
  });
});
