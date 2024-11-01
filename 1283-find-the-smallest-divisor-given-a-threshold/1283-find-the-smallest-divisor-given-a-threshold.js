function isSumDivisionGood(nums, divisor, threshold) {
    let sumDivision = 0;

    for (let num of nums) {
        sumDivision += Math.ceil(num / divisor);

        if (sumDivision > threshold) {
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

        if (isSumDivisionGood(nums, mid, threshold)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};