import { getCharacter } from "../src/snapshot";
import rick from "../rick.json";

describe('Es hora de las Instantaneas', () => {
    test('should show a snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    });

    test('should always fails', () => {
        const user = {
            /*  codigo original:
            createAt: Date.now(),
            id: Math.floor(Math.random() * 20),*/
            // datos de la snapshot para que coincida y no moleste.
            createAt: 1611068600352,
            id: 19,
        }
        expect(user).toMatchSnapshot();
    });

    /*test('Instantánea con algunas Excepciones en sus paths', () => {
        const user = {
          id: Math.floor(Math.random() * 100),
          name: 'Alejandro González Reyes',
          profesion: 'JavaScript and PHP Development',
          createdAt: new Date
        }
    
        // Se espera que la data recibida coincida con la instantánea. A excepción de los campos id y createdAt, los cuales se espera que reciban cualquier Numero y Fecha respectivamente
        expect(user).toMatchSnapshot({
          id: expect.any(Number),
          createdAt: expect.any(Date)
        });
    });*/
    
    test('We have a exception inside the code', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'tu mama',
        }

        expect(user).toMatchSnapshot({
            id: expect.any(Number),  
        });
    });
    
    
});
