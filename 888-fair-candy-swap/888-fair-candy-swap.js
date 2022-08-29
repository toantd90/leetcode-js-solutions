/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
function fairCandySwap(aliceSizes, bobSizes) {
  const aliceTotalAmount = aliceSizes.reduce((accumlation, current) => accumlation + current, 0) 
  const bobTotalAmount = bobSizes.reduce((accumlation, current) => accumlation + current, 0) 
  const diff = (aliceTotalAmount - bobTotalAmount) / 2
  
  const aliceSizesSet = new Set(aliceSizes)
  
  for (let i = 0; i < bobSizes.length; i++) {
    if (aliceSizesSet.has(bobSizes[i] + diff)) {
      return [bobSizes[i] + diff, bobSizes[i]]
    }
  }
};