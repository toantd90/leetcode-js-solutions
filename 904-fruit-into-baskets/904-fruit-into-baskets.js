/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let baskets = new Map()
  let maxFruits = 0
  let startTreeIndex = 0
  
  for (let i = 0; i < fruits.length; i++) {
    const fruitType = fruits[i]
    baskets.set(fruitType, baskets.get(fruitType) + 1 || 1)
    
    while (baskets.size > 2) {
      const fruitType = fruits[startTreeIndex]
      baskets.set(fruitType, baskets.get(fruitType) - 1)
      if (baskets.get(fruitType) == 0) baskets.delete(fruitType)
      startTreeIndex++
    }
    
    maxFruits = Math.max(maxFruits, i - startTreeIndex + 1)
  }
  
  return maxFruits
  
};