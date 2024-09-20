const gameManager = require('./game.js');

test('detect player 0 win', () => {
    gameManager.start(false);

    let count = 0;
    let x = 0;
    let y = 0;
    while (true){
        count++;
        gameManager.doTurn(x, y);

        if (x === 4){
            break;
        }
        expect(gameManager.isGameOver()).toBe(false);

        if (count % 2 === 0){
            x++;
            y++;
        }

    }

    expect(gameManager.isGameOver()).toBe(true);
    expect(gameManager.getWinner()).toBe(0);
});

test('detect player 1 win', () => {
    gameManager.start(false);

    let count = 0;
    let x = 0;
    let y = 0;
    while (true){
        count++;
        if (gameManager.getCurrentPlayer() === 0){
            gameManager.doTurn(0, 0);
        }
        else{
            gameManager.doTurn(x, y);
        }


        if (x === 4){
            break;
        }
        expect(gameManager.isGameOver()).toBe(false);

        if (count % 2 === 0){
            x++;
            y++;
        }

    }

    expect(gameManager.isGameOver()).toBe(true);
    expect(gameManager.getWinner()).toBe(1);

})


