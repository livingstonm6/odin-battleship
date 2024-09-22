import shipFactory from './ship.js';

const gameBoardFactory = (() => {
    const createGameBoard = () => {
        const shipGrid = [];
        const shotGrid = [];
        const ships = [];
        let shotCount = 0;

        for (let i = 0; i < 10; i++){
            shipGrid.push([]);
            shotGrid.push([]);
            for (let j = 0; j < 10; j++){
                shipGrid[i].push(-1);
                shotGrid[i].push(-1);
            }
        }

        const placeShip = function (x, y, length, direction) {
            // for now assume ship placement is valid
            const newShip = shipFactory.createShip(length, {x, y}, direction);
            ships.push(newShip);
            updateShipGrid(newShip);
        }

        const updateShipGrid = function(ship) {
            for (let i = 0; i < ship.len; i++){
                switch (ship.direction) {
                    case 'down':
                        shipGrid[ship.position.x + i][ship.position.y] = ships.length - 1; // index of ship
                        break;
                    case 'up':
                        shipGrid[ship.position.x - i][ship.position.y] = ships.length - 1;
                        break;
                    case 'left':
                        shipGrid[ship.position.x][ship.position.y - i] = ships.length - 1;
                        break;
                    case 'right':
                        shipGrid[ship.position.x][ship.position.y + i] = ships.length - 1;
                        break;
                    default:
                        console.log("Undefined ship direction in updateShipGrid:", ship, ship.direction);
                }
            }
        }

        const receiveAttack = function (x, y) {
            shotGrid[x][y] = shotCount++;
            const shipIndex = shipGrid[x][y];

            if (shipIndex === -1){
                return false;
            }

            ships[shipIndex].hit();
            return true;

        }

        const allSunk = function() {
            let result = true;
            ships.forEach(ship => {
               if (ship.isSunk() === false){
                   result = false;
               }
            });
            return result;
        }

        const getShipCount = function () {
            return ships.length;
        }

        const isShotValid = function (x, y) {
            return shotGrid[x][y] === -1;
        }

        const getShotGrid = function () {
            return shotGrid;
        }

        const getShipGrid = function () {
            return shipGrid;
        }

        return {placeShip, receiveAttack, allSunk, getShipCount, isShotValid, getShotGrid, getShipGrid};
    }

    return {createGameBoard};
})();

export default gameBoardFactory;