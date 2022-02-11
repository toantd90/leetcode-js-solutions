/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const binarySearch = (nums, target, isFindFirst = true) => {
    let l = 0
    let r = nums.length - 1
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        
        if (nums[mid] === target) {
            if ((isFindFirst && nums[mid - 1] !== target) || (!isFindFirst && nums[mid + 1] !== target)) {
                return mid
            } else {
                if (isFindFirst) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        } else if (target > nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return -1
}

const searchRange = (nums, target) => [binarySearch(nums,target), binarySearch(nums,target,false)]