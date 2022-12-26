/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  const length = nums.length;
  let stack = [0];
  let visited = new Set();
  
  while (stack.length > 0) {
    const currentIndex = stack.pop()
    if (currentIndex == length - 1) {
      return true;
    }
    for (let steps = 1; steps <= nums[currentIndex]; steps++) {
      const nextIndex = currentIndex + steps 
      if (!visited.has(nextIndex)) {
        stack.push(nextIndex);
        visited.add(nextIndex);
      }
    }
  }
  
  return false
};