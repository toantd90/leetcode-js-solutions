/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = nums => {
    let r = -1
    let max = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < max) {
            r = i
        } else {
            max = nums[i]
        }
    }
    
    let l = 0
    let min = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > min) {
            l = i
        } else {
            min = nums[i]
        }
    }
    
    return r - l + 1
};