/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let prev = 1
  let cur = 1
  
  for (let i = 2; i <= n; i++) {
    let temp = cur
    cur += prev
    prev = temp
  }
  
  return cur
};