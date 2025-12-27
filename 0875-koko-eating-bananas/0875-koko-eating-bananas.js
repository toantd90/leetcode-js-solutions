function canEatInH(piles, speed, maxHour) {
    let totalHour = 0;
    for (let i = 0; i < piles.length; i++) {
        totalHour += Math.ceil(piles[i] / speed);

        if (totalHour > maxHour) {
            return false;
        }
    }

    return true;
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    let l = 1;
    let r = Math.max(...piles);

    while (l < r) {
        const m = l + Math.floor((r - l) / 2);

        if (canEatInH(piles, m, h)) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return l;
};