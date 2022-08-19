/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let baskets = {}
  let maxFruits = 0
  let startTreeIndex = 0
  let curFruits = 0
  
  for (let i = 0; i < fruits.length; i++) {
    while (Object.keys(baskets).length <= 2 && i < fruits.length) {
      const fruitType = fruits[i]
      baskets[fruitType] = (baskets[fruitType] || 0) + 1
      curFruits++
      i++
    }
    
    if (Object.keys(baskets).length <= 2) {
      maxFruits = Math.max(maxFruits, curFruits)
    } else {
      maxFruits = Math.max(maxFruits, curFruits - 1)
    }
    
    while (Object.keys(baskets).length > 2 && startTreeIndex < fruits.length) {
      const fruitType = fruits[startTreeIndex]
      baskets[fruitType]--
      if (baskets[fruitType] == 0) delete baskets[fruitType]
      curFruits--
      startTreeIndex++
    }
    
    i--
  }
  
  return maxFruits
  
};