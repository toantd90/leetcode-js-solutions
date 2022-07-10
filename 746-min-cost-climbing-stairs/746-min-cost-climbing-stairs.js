/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let pre = cost[0]
  let cur = cost[1]
  
  for (let i = 2; i <= cost.length; i++) {
    const temp = cur
    cur = Math.min(pre, cur) + (cost[i] || 0)
    pre = temp
  }
  
  return cur
};