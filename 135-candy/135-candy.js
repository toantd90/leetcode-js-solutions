/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const children = ratings.length
  let candies = new Array(children).fill(1)
  
  for (let i = 1; i < children; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    } else {
      candies[i] = 1
    }
  }
  
  let sum = candies[children - 1]
  
  for (let i = children - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
    
    sum += candies[i]
  }
  
  return sum
};