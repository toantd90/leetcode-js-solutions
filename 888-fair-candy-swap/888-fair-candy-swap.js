/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
function fairCandySwap(aliceSizes, bobSizes) {
  const aliceTotalAmount = aliceSizes.reduce((accumlation, current) => accumlation + current, 0) 
  const bobTotalAmount = bobSizes.reduce((accumlation, current) => accumlation + current, 0) 
  const fairTotalAmount = (aliceTotalAmount + bobTotalAmount) / 2
  
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (aliceTotalAmount + bobSizes[j] - aliceSizes[i] == fairTotalAmount) {
        return [aliceSizes[i], bobSizes[j]]
      }
    }
  }
};