function canSplit(nums, k, sum) {
    let i = 0;
    let curSum = 0;
    let numOfSubArr = 1;

    while (i < nums.length && numOfSubArr <= k) {
        curSum += nums[i];

        if (curSum > sum) {
            curSum = nums[i];
            numOfSubArr++;
        }

        i++;
    }

    return numOfSubArr <= k;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    let l = 0;
    let r = 0;
    for (num of nums) {
        l = Math.max(l, num);
        r += num;
    }

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