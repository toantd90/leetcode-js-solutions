/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = nums => {
    let prefixSum = [nums[0]]
    const len = nums.length
    
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }
    
    
    let res = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (prefixSum[i] >= prefixSum[len - 1] - prefixSum[i])
            res++
    }
    
    return res
};