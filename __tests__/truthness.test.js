import { isFalse, isNull, isTrue, isUndefined } from "../src/truthness";

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
    test('true', () => {
        expect(isTrue()).toBeTruthy();
    });
    test('false', () => {
        expect(isFalse()).toBeFalsy();
    });
})