/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
const findKDistantIndices = (nums, key, k) => {
  const length = nums.length
  let keyIndexes = []
  
  nums.forEach((num, index) => {
      if (num === key) keyIndexes.push(index)
  })
    
  let res = new Set()
  
  for (let index of keyIndexes) {
      for (let i = Math.max(index - k, 0); i <= Math.min(index + k, length - 1); i++) {
          res.add(i)
      }
  }
    
  return Array.from(res)
};