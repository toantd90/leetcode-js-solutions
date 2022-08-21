/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
function minimumRecolors(blocks, k) {
  let whiteCount = 0
  
  for (let i = 0; i < k; i++) {
    if (blocks[i] == 'W') whiteCount++
  }
  
  if (whiteCount == 0) return 0
  
  let currentWhiteCount = whiteCount
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] == 'W') currentWhiteCount--
    if (blocks[i] == 'W') currentWhiteCount++
    
    whiteCount = Math.min(whiteCount, currentWhiteCount)
  }
  
  return whiteCount
};