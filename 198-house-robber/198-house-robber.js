/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    let first = 0
    let last = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        const temp = Math.max(last, first + nums[i])
        first = last
        last = temp
    }
    
    return last
};