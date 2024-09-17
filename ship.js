const shipFactory = (() => {
    const createShip = function (length) {
        const len = length;
        let numHits = 0;

        const hit = function(){
            numHits++;
        }

        const isSunk = function(){
            return numHits === len;
        }

        return {len, numHits, hit, isSunk};
    }


    return {createShip};
})();

module.exports = shipFactory;