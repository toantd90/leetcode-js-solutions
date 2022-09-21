/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
function sumEvenAfterQueries(nums, queries) {
  let sumEven = nums.reduce((sum, num) => num % 2 == 0 ? sum + num : sum, 0)
  let ans = []
  
  for (let [val, index] of queries) {
    if (nums[index] % 2 == 0) sumEven -= nums[index]
    nums[index] += val
    if (nums[index] % 2 == 0) sumEven += nums[index]
    ans.push(sumEven)
  }
  
  return ans
};