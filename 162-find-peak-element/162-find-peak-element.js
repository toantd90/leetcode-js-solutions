/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
    
    let l = 0
    let r = nums.length - 1
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        
        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
};