import { arrayColors, arrayFruits } from "../src/arrays";

describe('Comprobar existencia', () => {
    test('Contiene naranja?', () => {
        expect(arrayFruits()).toContain('naranja');
    });
    test('Contiene naranja?', () => {
        expect(arrayFruits()).not.toContain('sandia');
    });
    test('longitud', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
});