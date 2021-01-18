import { theCallbackMuajaja } from "../src/callback";

describe('Callback testing', () => {
    test('Callback', done => {
        function notACallback(data) {
            expect(data).toBe('hola viajero');
            done();
        }
        theCallbackMuajaja(notACallback);
    });
});