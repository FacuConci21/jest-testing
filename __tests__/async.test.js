import { getDataFromAPI } from "../src/promise";

describe('Async test', () => {
    test('API request', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const rick = 'https://rickandmortyapi.com/api/character/1';

        await getDataFromAPI(api)
            .then( data => {
                expect(data.results.length).toBeGreaterThan(0);
            });
        
        await getDataFromAPI(rick)
            .then( data => {
                expect(data.name).toEqual('Rick Sanchez');
            });
    });

    test('Fail API request', async () => {
        const apiError = 'http://httpstat.us/404';
        const request = getDataFromAPI(apiError);

        await expect(request).rejects.toEqual(Error('Request failed with status code 404'));
    });

    test('Resuelve un hola mundo', async () => {
        await expect(Promise.resolve('hola mundo')).resolves.toBe('hola mundo');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});
