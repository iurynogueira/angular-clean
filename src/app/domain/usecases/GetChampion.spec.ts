import ServiceFactory from 'src/app/infra/factory/ServiceFactory';
import ServiceFactoryHttp from 'src/app/infra/factory/ServiceFactoryHttp';
import AxiosAdapter from 'src/app/infra/http/AxiosAdapter';
import { environment } from 'src/environments/environment';
import GetChampion from './GetChampion';

let serviceFactory: ServiceFactory;

beforeEach(() => {
  serviceFactory = new ServiceFactoryHttp(
    new AxiosAdapter(),
    environment.serverUrl
  );
});

describe('GetChampion Usecase', () => {
  it('should return', async () => {
    const getChampion = new GetChampion(serviceFactory);
    const output = await getChampion.execute();
    expect(output.name).toBe('Akali');
  });
});
