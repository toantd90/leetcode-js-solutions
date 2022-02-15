/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    let l = 0, r = 0, sum = 0, res = nums.length + 1;
    
    while (r < nums.length) {
        sum += nums[r]
        r++
        
        while (sum >= target) {
            sum -= nums[l++]
            res = Math.min(res, r - l + 1)
        }
    }
    
    return res === nums.length + 1 ? 0 : res
};