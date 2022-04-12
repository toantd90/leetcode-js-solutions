const findFirstElementGreaterThanTarget = (nums, target, l) => {
    let r = nums.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        if (target > nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return r
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = (nums1, nums2) => {
    let maximumDistance = 0
    
    for (let i = 0; i < nums1.length; i++) {
        const index = findFirstElementGreaterThanTarget(nums2, nums1[i], i)
        
        maximumDistance = Math.max(maximumDistance, index - i)
    }
    
    return maximumDistance
};