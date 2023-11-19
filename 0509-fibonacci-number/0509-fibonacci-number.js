/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  let dp = new Array(n)
  dp[0] = 0
  dp[1] = 1
  
  if (n < 2) {
    return dp[n]
  }
  
  if (dp[n]) {
    return dp[n]
  }
  
  dp[n] = fib(n - 1) + fib(n - 2)
  
  return dp[n]
};