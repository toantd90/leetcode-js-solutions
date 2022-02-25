const findFirstIndexOfNegative = nums => {
    const n = nums.length
    let l = 0
    let r = n
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (nums[mid] >= 0) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
} 

const countNegativesInAnArray = nums => {
    const firstIndex = findFirstIndexOfNegative(nums)
    
    return nums.length - firstIndex
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = grid => {
    const m = grid.length
    let res = 0
    
    for (let i = 0; i < m; i++) {
        res += countNegativesInAnArray(grid[i])
    }
    
    return res
};