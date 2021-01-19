export const getCharacter = data => {
    return {
        'id': data.id,
        'name': data.name,
        'status': data.status,
        'species': data.species,
        'gender': data.gender,
        'universe': data.universe,
        "portalGunId": data.portalGunId,
        "criminalRecord": {
            "sentence": data.criminalRecord.sentence,
            "status": data.criminalRecord.status,
            "transmitter": data.criminalRecord.transmitter,
            "universe": data.criminalRecord.universe,
        }
    }
}

/*

Yo no hubiera hecho esto asi, es una sintaxis vieja, hubiera utilizado en su lugar
una Clase de ES6, pero lo dejo de esta manera por seguir el curso simplemente.

*/