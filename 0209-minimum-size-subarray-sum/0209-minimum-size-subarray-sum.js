/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
    let l = 0;
    let r = 0;
    const n = nums.length;
    let sum = 0;
    let min = n + 1;

    while (r < n) {
        sum += nums[r];

        while (sum - nums[l] >= target) {
            sum -= nums[l];
            l++;
        }

        if (sum >= target) {
            min = Math.min(min, r - l + 1);
        }

        r++;
    }

    return min === n + 1 ? 0 : min
};