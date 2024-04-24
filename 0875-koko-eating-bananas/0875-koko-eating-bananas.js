function getEatHours(piles, k) {
    return piles.reduce((accumulation, pile) => {
        if (pile <= k) {
            return accumulation + 1;
        } else {
            return accumulation + Math.ceil(pile / k)
        }
    }, 0);
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let max = Math.max(...piles);
    let min = 1;

    while (min <= max) {
        const mid = min + Math.floor((max - min) / 2);
        const hours = getEatHours(piles, mid);

        if (hours <= h) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return min;
};