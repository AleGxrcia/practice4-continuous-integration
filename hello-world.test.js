const greet = require('./app');

test('returns "Hola Mundo"', () => {
    expect(greet()).toBe("Hola Mundo");
});