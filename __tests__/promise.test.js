import { getDataFromAPI } from "../src/promise";

describe('Promise test', () => {
    test('Realizando una peticion a una API', done => {
        getDataFromAPI('https://rickandmortyapi.com/api/character/')
            .then( data => {
                expect(data).toBeGreaterThan(0);
            })
            .finally(done());
    });

    test('Resolving test', () => {
        return expect(Promise.resolve('Valar morghulis')).resolves.toBe('Valar morghulis');
    });

    test('Rejecting test', () => {
        return expect(Promise.reject('Valar dohaerys')).rejects.toBe('Valar dohaerys');
    });
});

/*describe('Promise - to have property', () => {
    test('Peticion a la API', done => {
        getDataFromAPI('https://rickandmortyapi.com/api/character/')
            .then( data => {
                expect(data).toHaveProperty('results');
            })
            .finally(done());
    });
});*/