/**
 * @param {number[]} nums
 * @return {number}
 */
const subArrayRanges = nums => {
    let ranges = 0
    const len = nums.length
    
    for (let i = 0; i < len; i++) {
        let min = nums[i]
        let max = nums[i]
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < min) min = nums[j]
            if (nums[j] > max) max = nums[j]
            ranges += max - min
        }
    }
    
    return ranges
};