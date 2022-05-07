/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = nums => {
    let min = [nums[0]]
  
    for (let i = 1; i < nums.length; i++) {
        min[i] = Math.min(min[i - 1], nums[i])
    }
    
    let stack = []
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] <= min[i]) continue
        while (stack.length && stack[stack.length - 1] <= min[i]) {
            stack.pop()
        }
        
        if (stack.length && stack[stack.length - 1] < nums[i]) return true
        stack.push(nums[i])
    }
    
    return false
};
