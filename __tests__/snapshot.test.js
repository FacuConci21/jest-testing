import { getCharacter } from "../src/snapshot";
import rick from "../rick.json";

describe('Es hora de las Instantaneas', () => {
    test('should show a snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    })
    
})
