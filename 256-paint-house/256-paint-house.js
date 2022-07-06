/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCost = costs => {
  
  for (let i = 1; i < costs.length; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2])
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2])
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1])
  }
  
  return Math.min(...costs[costs.length - 1])
};