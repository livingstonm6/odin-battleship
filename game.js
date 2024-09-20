const playerManager = require("./player.js");

const gameManager = (() => {
    let players = [];
    let currentPlayer = 0;
    let turnNumber = 0;
    let gameWon = false;
    let winner = 0;

    const start = function (vsComputer){
        if (gameWon){   // restart
            while (players.length > 0){
                players.pop();
            }
            gameWon = false;
        }
        players.push(playerManager.createPlayer(false));
        players.push(playerManager.createPlayer(vsComputer));
        turnNumber = 0;
        setupBoard();
    }

    const setupBoard = function () {
        // do default board setup
        for (let i = 0; i < 5; i++){
            players[0].gameBoard.placeShip(i, i, 1, 'down');
            players[1].gameBoard.placeShip(i, i, 1, 'down');
        }
    }

    const doTurn = function (x, y){
        if (gameWon){
            return;
        }

        turnNumber++;
        let opponent = 1 - currentPlayer;

        // do action
        if (players[currentPlayer].gameBoard.isShotValid(x, y)){
            players[opponent].gameBoard.receiveAttack(x, y);
        }

        // did player win?
        gameWon = players[opponent].gameBoard.allSunk();
        if (gameWon) winner = currentPlayer;

        // next turn
        currentPlayer = (currentPlayer + 1) % 2;
    }

    const isGameOver = function() {
        return gameWon;
    }

    const getWinner = function() {
        return winner;
    }

    const getCurrentGrids = function() {
        const opponent = 1 - currentPlayer;
        const shotGrid = players[opponent].gameBoard.getShotGrid();
        const shipGrid = players[currentPlayer].gameBoard.getShipGrid();
        return {shotGrid, shipGrid};
    }

    const getCurrentPlayer = function() {
        return currentPlayer;
    }

    return {start, doTurn, isGameOver, getWinner, getCurrentGrids, getCurrentPlayer};

})();

module.exports = gameManager;