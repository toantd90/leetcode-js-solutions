function canDivide(nums, divisor, threshold) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

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
function smallestDivisor(nums, threshold) {
    let l = 1;
    let r = Math.max(...nums);

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canDivide(nums, mid, threshold)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};