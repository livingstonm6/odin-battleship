const gameBoardFactory = require("./gameboard.js");

test('add ship to board', () => {
    const testGameBoard = gameBoardFactory.createGameBoard();
    testGameBoard.placeShip(0, 0, 3, 'down');

    expect(testGameBoard.getShipCount()).toBe(1);
});

test('sink ships, allSunk', () => {
    const testGameBoard = gameBoardFactory.createGameBoard();
    testGameBoard.placeShip(1, 1, 1, 'down');
    testGameBoard.placeShip(5, 5, 1, 'right');

    expect(testGameBoard.getShipCount()).toBe(2);
    expect(testGameBoard.receiveAttack(0, 0)).toBe(false);

    expect(testGameBoard.receiveAttack(1, 1)).toBe(true);

    expect(testGameBoard.allSunk()).toBe(false);
    expect(testGameBoard.receiveAttack(5, 5)).toBe(true);
    expect(testGameBoard.allSunk()).toBe(true);

});




