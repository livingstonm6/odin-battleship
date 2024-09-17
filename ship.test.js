const shipFactory = require('./ship.js');

test('create ship', () => {
   testShip = shipFactory.createShip(5)
   expect(testShip.len).toBe(5);
});

test('sink ship', () => {
    testShip = shipFactory.createShip(5);
    expect(testShip.isSunk()).toBe(false);

    for (let i = 0; i < 4; i++){
        testShip.hit();
        expect(testShip.isSunk()).toBe(false);
    }

    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});