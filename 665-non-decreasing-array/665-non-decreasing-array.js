/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = nums => {
  let decreasingTimes = 0
  let modifyId = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      decreasingTimes++
        
      if (nums[i - 1] > nums[i + 1])
        nums[i + 1] = nums[i]
      else 
        nums[i] = nums[i -1]
        
      if (decreasingTimes > 1)
        return false
    }
    
  }
  
  return true
};