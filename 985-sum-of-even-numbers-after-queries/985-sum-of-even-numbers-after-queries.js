/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
function sumEvenAfterQueries(nums, queries) {
  let sumEven = 0
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      sumEven += nums[i]
    }
  }
  let ans = []
  
  for (let [val, index] of queries) {
    if (nums[index] % 2 == 0) sumEven -= nums[index]
    nums[index] += val
    if (nums[index] % 2 == 0) sumEven += nums[index]
    ans.push(sumEven)
  }
  
  return ans
};