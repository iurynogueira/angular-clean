import MemoryRepositoryFactory from 'src/app/infra/factory/MemoryRepositoryFactory';
import RepositoryFactory from '../factory/RepositoryFactory';
import GetChampion from './GetChampion';

let repositoryFactory: RepositoryFactory;

beforeEach(() => {
  repositoryFactory = new MemoryRepositoryFactory();
});

describe('GetChampion Usecase', () => {
  it.skip('should return', async () => {
    const getChampion = new GetChampion(repositoryFactory);
    const output = await getChampion.execute();
    expect(output).toBeUndefined();
  });
});
