/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n
  let pre = 0
  let cur = 1
  
  for (let i = 2; i <= n; i++) {
    const temp = cur
    cur += pre
    pre = temp
  }
  
  return cur
};