/**
 * @param {number[]} position
 * @return {number}
 */
function minCostToMoveChips(position) {
  let oddPositionCoints = 0
  let evenPositionCoints = 0
  
  for (let p of position) {
    if (p % 2 == 0) {
      evenPositionCoints++
    } else {
      oddPositionCoints++
    }
  }
  
  return Math.min(evenPositionCoints, oddPositionCoints)
};