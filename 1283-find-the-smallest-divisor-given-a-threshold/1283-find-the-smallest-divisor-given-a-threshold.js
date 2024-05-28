function isDivisor(nums, threshold, divisor) {
    let sumDivisor = 0;
    for (let num of nums) {
        sumDivisor += Math.ceil(num / divisor);

        if (sumDivisor > threshold) {
            return false;
        }
    }

    return sumDivisor <= threshold;
}

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let l = 1;
    let r = Math.max(...nums);

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (isDivisor(nums, threshold, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l
};