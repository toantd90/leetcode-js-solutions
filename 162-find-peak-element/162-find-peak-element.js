/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
    if (nums.length === 1) return 0
    if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1
    let l = 0
    let r = nums.length - 1
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        
        if (nums[mid] > (nums[mid + 1] || 0) && nums[mid] > (nums[mid - 1] || 0)) {
            return mid
        } else if (nums[mid - 1] > nums[mid + 1]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
};