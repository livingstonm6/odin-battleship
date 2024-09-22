import uiManager from './ui.js';
import gameManager from './game.js';
const status = document.querySelector(".status");

function displayGrids () {
    const grids = gameManager.getCurrentGrids();
    uiManager.displayShipBoard(grids.shipGrid);
    uiManager.displayShotBoard(grids.shotGrid);
    const currentPlayer = gameManager.getCurrentPlayer();
    status.textContent = "Player " + (currentPlayer + 1).toString() + "'s turn";
}

function initUIElements (){
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", () => {
        gameManager.start(false);
        displayGrids();
    });
}


initUIElements();


