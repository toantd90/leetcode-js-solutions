/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  let previousCost = [...costs[0]]
  let totalCost = [...costs[0]]
  
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (j == 0) {
        totalCost[j] = costs[i][j] + Math.min(previousCost[1], previousCost[2])  
      } else if (j == 1) {
        totalCost[j] = costs[i][j] + Math.min(previousCost[0], previousCost[2])
      } else {
        totalCost[j] = costs[i][j] + Math.min(previousCost[0], previousCost[1])
      }
    }
    previousCost = [...totalCost]
  }
  
  return Math.min(...totalCost)
};