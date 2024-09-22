const uiManager = (() => {
    const shotBoard = document.querySelector(".shot-board");
    const shipBoard = document.querySelector(".ship-board");

    const displayShotBoard = function(grid) {
        shotBoard.replaceChildren();
        for (let i = 0; i < 10; i++){
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < 10; j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                if (grid[i][j] !== -1){
                    cell.textContent = grid[i][j].toString();
                }
                row.appendChild(cell);
            }
            shotBoard.appendChild(row);
        }
    }

    const displayShipBoard = function(grid) {
        shipBoard.replaceChildren();
        for (let i = 0; i < 10; i++){
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < 10; j++){
                const cell = document.createElement("div");
                cell.classList.add("cell");
                if (grid[i][j] !== -1){
                    cell.textContent = grid[i][j].toString();
                }
                row.appendChild(cell);
            }
            shipBoard.appendChild(row);
        }
    }

    return {displayShotBoard, displayShipBoard};


})();

export default uiManager;