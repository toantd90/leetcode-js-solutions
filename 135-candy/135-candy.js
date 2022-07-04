/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const children = ratings.length
  let leftToRight = new Array(children)
  leftToRight[0] = 1
  let rightToLeft = new Array(children)
  rightToLeft[children - 1] = 1
  
  for (let i = 1; i < children; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftToRight[i] = leftToRight[i - 1] + 1
    } else {
      leftToRight[i] = 1
    }
  }
  
  for (let i = children - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rightToLeft[i] = rightToLeft[i + 1] + 1
    } else {
      rightToLeft[i] = 1
    }
  }
  
  let candies = 0
  
  for (let i = 0; i < children; i++) {
    candies += Math.max(leftToRight[i], rightToLeft[i])
  }
  
  return candies
};