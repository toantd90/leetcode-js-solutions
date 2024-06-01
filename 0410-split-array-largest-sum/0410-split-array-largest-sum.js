function canSplit(nums, k, sum) {
    let curSum = 0;
    let i = 0;
    let numOfSubArrays = 1;

    while (i < nums.length) {
        curSum += nums[i];

        if (curSum > sum) {
            curSum = nums[i];
            numOfSubArrays++;

            if (numOfSubArrays > k) {
                return false;
            }
        }
        i++;
    }

    return numOfSubArrays <= k;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    let l = 0;
    let r = nums.reduce((acc, num) => {
        l = Math.max(l, num);
        return acc + num
    });

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        if (canSplit(nums, k, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};