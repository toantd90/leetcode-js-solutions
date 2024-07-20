function canSplitArray(nums, k, sum) {
    let currentSum = 0;
    let numOfSubArrays = 1;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum > sum) {
            currentSum = nums[i];
            numOfSubArrays++;

            if (numOfSubArrays > k) {
                return false;
            }
        }
    }

    return numOfSubArrays <= k;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    let l = Math.max(...nums);
    let r = nums.reduce((accumulation, num) => accumulation + num, 0);

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canSplitArray(nums, k, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};