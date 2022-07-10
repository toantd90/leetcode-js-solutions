/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCostII = costs => {
  const k = costs[0].length
  
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < k; j++) {
      costs[i][j] += Math.min(...costs[i - 1].slice(0, j).concat(costs[i - 1].slice(j + 1)))
    }
  }
  
  return Math.min(...costs.pop())
};