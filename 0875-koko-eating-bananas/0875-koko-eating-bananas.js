function canEat(piles, totalHour, eatingSpeed) {
    let hour = 0;

    for (let banana of piles) {
        hour += Math.ceil(banana / eatingSpeed);
    }

    return hour <= totalHour;
}


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
    const min = 1;
    const max = Math.max(...piles);

    let l = min;
    let r = max;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canEat(piles, h, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};