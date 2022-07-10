/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  const k = costs[0].length
  
  for (let i = 1; i < costs.length; i++) {
    let curCost = [...costs[i]]
    for (let j = 0; j < k; j++) {
      curCost[j] += Math.min(...costs[i - 1].slice(0, j).concat(costs[i - 1].slice(j + 1)))
    }
    
    costs[i] = curCost
  }
  
  return Math.min(...costs.pop())
};