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
    if (position[i] % 2 == 0) {
      cost = Math.min(cost, oddPositionCoints)
    } else {
      cost = Math.min(cost, evenPositionCoints)
    }
  }
  
  return cost
};