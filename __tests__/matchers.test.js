describe('Comparadores comunes', () => {
    const user = {
        name: "Devora",
        lastname: "Meltrozo",
    };

    const user1 = {
        name: "Devora",
        lastname: "Meltrozo",
    };

    test('igualdad de elementos', () => {
        expect(user).toEqual(user1);
    });

})