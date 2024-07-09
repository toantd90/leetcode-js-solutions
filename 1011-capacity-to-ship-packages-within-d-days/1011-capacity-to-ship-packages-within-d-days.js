function canShip(weights, days, capacity) {
    let currentWeight = 0;
    let numOfDays = 1;

    for (let i = 0; i < weights.length; i++) {
        const weight = weights[i];
        currentWeight += weight;
        if (currentWeight > capacity) {
            numOfDays++;
            currentWeight = weight;

            if (numOfDays > days) {
                break;
            }
        }
    }

    return numOfDays <= days;
}

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let l = Math.max(...weights);
    let r = weights.reduce((accumulation, weight) => accumulation + weight, 0);

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canShip(weights, days, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l
};