/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let l = 0
    let r = nums.length - 1
    
    while (l <= r) {
        if (nums[l] === target) return l
        if (nums[r] === target) return r
        const mid = Math.floor((l + r) / 2)
        
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > nums[r]) {
            // pivot in range mid .. r
            // l to mid is normal
           if (nums[l] <= target && target <= nums[mid]) {
               r = mid - 1
           } else {
               l = mid + 1
           }
        } else {
            // pivot in range l   .. mid
            // mid + 1 to r is normal
          if (nums[mid + 1] <= target && target <= nums[r]) {
              l = mid + 1
          } else {
              r = mid - 1
          }
        }
    }
    
    return -1
};