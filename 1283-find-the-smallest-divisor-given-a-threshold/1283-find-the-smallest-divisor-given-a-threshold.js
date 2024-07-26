function canDivide(nums, threshold, divisor) {
    let sum = 0;

    for (let num of nums) {
        sum += Math.ceil(num / divisor);
        if (sum > threshold) {
            return false;
        }
    }

    return true;
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

        if (canDivide(nums, threshold, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};