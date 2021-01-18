describe('Comprobacion de pertenencia en strings', () => {

    let text = 'golasfasds';

    test('contiene', () => {
        expect(text).toMatch(/sf/);
    });
    test('no contiene', () => {
        expect(text).not.toMatch(/lm/);
    });
});