import { numbers, } from "../src/numbers";

describe('Comparacion de numeros', () => {
    test('Mayor que ...', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });
    test('Mayor/Igual que ...', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });
    test('Menor que ...', () => {
        expect(numbers(2,2)).toBeLessThan(5);
    });
    test('Menor/Igual que ...', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(4);
    });
    test('numeros con coma', () => {
        expect(numbers(0.2, 0.2)).toBeCloseTo(0.5);
    });

})