const gameBoardFactory = require("./gameboard.js");

const playerFactory =(() => {
    const createPlayer = function(computerControlled) {
        const cpuControlled = computerControlled;
        const gameBoard = gameBoardFactory.createGameBoard();

        return {cpuControlled, gameBoard};

    }


    return {createPlayer};
})();

module.exports = playerFactory;