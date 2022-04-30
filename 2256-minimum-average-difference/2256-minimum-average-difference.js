/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = nums => {
    let totalSum = nums.reduce((acc, cur) => acc + cur, 0)
    
    let soFar = 0
    let diff = 1e5 + 1
    let index = -1
    
    for (let i = 0; i < nums.length; i++) {
        soFar += nums[i]
        totalSum -= nums[i]
        const curDiff = Math.abs(Math.floor(soFar / (i + 1)) - (i < nums.length - 1 ? Math.floor(totalSum / (nums.length - i - 1)) : 0))

        if (curDiff < diff) {
            diff = curDiff
            index = i
        }
    }
    
    return index
};