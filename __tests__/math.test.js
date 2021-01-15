import { sum, subs, prod, div, } from "../src/index";

describe('calculos matematicos', () => {
    test('prueba de sumar', () => {
        expect(sum(1,2)).toBe(3);
    });
});