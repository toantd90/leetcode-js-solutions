/**
 * @param {number[]} position
 * @return {number}
 */
function minCostToMoveChips(position) {
  let cost = Number.MAX_SAFE_INTEGER
  let oddPositionCoints = 0
  let evenPositionCoints = 0
  
  for (let p of position) {
    if (p % 2 == 0) {
      evenPositionCoints++
    } else {
      oddPositionCoints++
    }
  }

  for (let i = 0; i < position.length; i++) {
    let currentCost = 0
    if (position[i] % 2 == 0) {
      currentCost += oddPositionCoints
    } else {
      currentCost += evenPositionCoints
    }
    
    cost = Math.min(cost, currentCost)
  }
  
  return cost
};