const shipFactory = require('../ship.js');

test('create ship', () => {
    const x = 0;
    const y = 0;
   const testShip = shipFactory.createShip(5,{x, y} , 'down')
   expect(testShip.len).toBe(5);
});

test('sink ship', () => {
    const testShip = shipFactory.createShip(5);
    expect(testShip.isSunk()).toBe(false);

    for (let i = 0; i < 4; i++){
        expect(testShip.getNumHits()).toBe(i);
        testShip.hit();
        expect(testShip.isSunk()).toBe(false);
    }

    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});
