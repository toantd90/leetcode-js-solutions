/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
    let l = 0
    let r = nums.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1
        } else {
            r = mid - 1
            
        }
    }
    
    return l
};