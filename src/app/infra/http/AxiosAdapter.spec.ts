import AxiosAdapter from './AxiosAdapter';

let axiosAdapter: AxiosAdapter;
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

beforeEach(() => {
  axiosAdapter = new AxiosAdapter();
});

describe('AxiosAdapter', () => {
  it('should call get method', async () => {
    const response = await axiosAdapter.get(`${baseUrl}/1`);
    expect(response.id).toBe(1);
  });

  it('should call post method', async () => {
    const response = await axiosAdapter.post(baseUrl, {
      id: 1,
      title: 'In the end',
    });
    expect(response.id).toBe(101);
  });
});
