function backtrack(num, nums, n, k) {
  if (String(num).length == n) {
    nums.push(num)
    return
  }
  const lastNum = num % 10
  if (lastNum - k >= 0) {
    num = num * 10 + lastNum - k
    backtrack(num, nums, n, k)
    num = Math.floor(num / 10)
  }
  
  if (k != 0 && lastNum + k <= 9) {
    num = num * 10 + lastNum + k
    backtrack(num, nums, n, k)
    num = Math.floor(num / 10)
  }
}


/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function numsSameConsecDiff(n, k) {
  let nums = []
  
  for (let i = 1; i <= 9; i++) {
    backtrack(i, nums, n, k)
  }
  
  return nums
};