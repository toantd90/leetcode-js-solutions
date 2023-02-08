/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const n = nums.length
  let numOfJumps = new Array(n).fill(0)
  
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= Math.min(nums[i], n - i); j++) {
      if (numOfJumps[i + j] == 0) numOfJumps[i + j] = numOfJumps[i] + 1
      numOfJumps[i + j] = Math.min(numOfJumps[i + j], numOfJumps[i] + 1)
    }
  }
  
  return numOfJumps[n - 1]
};