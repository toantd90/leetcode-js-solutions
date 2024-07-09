function canShip(weights, days, shipCapacity) {
    let day = 1;
    let currentWeight = 0;

    for (let w of weights) {
        currentWeight += w;

        if (currentWeight > shipCapacity) {
            day++;
            currentWeight = w;
        }
    }

    return day <= days;
}   

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights);
    let r = weights.reduce((acc, weight) => acc + weight);

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canShip(weights, days, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};