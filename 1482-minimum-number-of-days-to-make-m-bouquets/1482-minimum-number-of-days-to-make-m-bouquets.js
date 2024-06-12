function canMakeBouquets(bloomDay, m, k, day) {
    let flowers = 0;
    let bouquets = 0;

    for (let bDay of bloomDay) {
        if (day >= bDay) {
            flowers++;
        } else {
            bouquets += Math.floor(flowers / k);
            flowers = 0;
        }
    }

    bouquets += Math.floor(flowers / k);

    return bouquets >= m;
}

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    const n = bloomDay.length;

    if (m * k > n) return -1;

    let l = Math.min(...bloomDay);
    let r = Math.max(...bloomDay);

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canMakeBouquets(bloomDay, m, k, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};