import { ChampionProps } from '../domain/entities/champion/champion-entity';

export default function championMock(): ChampionProps {
  return {
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
}
