/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = nums => {
    const n = nums.length
    let k
    for (k = n - 2; k >= 0; k--) {
        if (nums[k] < nums[k + 1]) break
    }
    
    if (k === -1) {
        nums.reverse()
        return
    }
    let l
    for (l = n - 1; l > k; l--) {
        if (nums[l] > nums[k]) break
    }
    
    [nums[l], nums[k]] = [nums[k], nums[l]]
    
    let i = k + 1, j = n - 1
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
        j--
    }
};