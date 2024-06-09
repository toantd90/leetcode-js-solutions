/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
    n--;
    const isReversed = Math.floor(k / n) % 2 === 1;
    return isReversed ? n - (k % n) : k % n;
};