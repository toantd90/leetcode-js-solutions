/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let l = 0, r = nums.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (nums[mid] === target) {
            return mid
        } else if ((mid === nums.length - 1 || nums[mid + 1] > target) && nums[mid] < target) {
            return mid + 1
        } else if (mid === 0 && nums[mid] > target) {
            return 0
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
};