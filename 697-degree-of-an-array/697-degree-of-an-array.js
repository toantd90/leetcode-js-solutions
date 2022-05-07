/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = nums => {
    let maxFrequence = 0
    let freq = {}
    let first = {}
    let shortestSubArray = 1
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (freq[num]) {
            freq[num]++
        } else {
            freq[num] = 1
            first[num] = i
        }
        
        if (freq[num] > maxFrequence) {
            maxFrequence = freq[num]
            shortestSubArray = i - first[num] + 1
        }
        
        if (freq[num] === maxFrequence) {
            shortestSubArray = Math.min(shortestSubArray, i - first[num] + 1)
        }
    }
    
    return shortestSubArray
};