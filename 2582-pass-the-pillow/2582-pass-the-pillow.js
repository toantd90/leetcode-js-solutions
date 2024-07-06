/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    const isReverse = Math.floor(time / (n - 1)) % 2 === 1

    if (time <= n - 1) {
        return time + 1;
    } else {
        if (isReverse) {
            return n - (time % (n - 1));
        } else {
            return (time % (n - 1)) + 1;
        }
    }
};