/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let baskets = {}
  let maxFruits = 0
  let startTreeIndex = 0
  
  for (let i = 0; i < fruits.length; i++) {
    const fruitType = fruits[i]
    baskets[fruitType] = (baskets[fruitType] || 0) + 1
    
    while (Object.keys(baskets).length > 2 && startTreeIndex < fruits.length) {
      const fruitType = fruits[startTreeIndex]
      baskets[fruitType]--
      if (baskets[fruitType] == 0) delete baskets[fruitType]
      startTreeIndex++
    }
    
    maxFruits = Math.max(maxFruits, i - startTreeIndex + 1)
  }
  
  return maxFruits
  
};