const shipFactory = (() => {
    const createShip = function (length, position, direction) {
        const len = length;
        let numHits = 0;

        const hit = function(){
            numHits++;
        }

        const isSunk = function(){
            return numHits === len;
        }

        const getNumHits = function() {
            return numHits;
        }

        return {len, position, direction, getNumHits, hit, isSunk};
    }


    return {createShip};
})();

module.exports = shipFactory;