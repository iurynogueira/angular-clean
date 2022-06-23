import { ChampionProps } from '../domain/entities/champion/champion-entity';

export function championMockEzreal(): ChampionProps {
  return {
    name: 'Ezreal',
    key: '81',
    tags: ['Mage', 'Marksman'],
    stats: {
      armor: 24,
      attackdamage: 60,
      attackspeed: 0.625,
      hp: 900,
    },
  };
}
