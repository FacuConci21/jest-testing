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
});
