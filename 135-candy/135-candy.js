/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const children = ratings.length
  let rateByIndex = ratings.map((rating, index) => [rating, index])
  
  
  rateByIndex.sort(([r1, i1], [r2, i2]) => {
    if (r1 > r2) {
      return 1
    } else if (r1 < r2) {
      return -1
    } else {
      return i1 > i2 ? 1 : -1
    }
  })
  
  let candies = new Array(children).fill(0)
  
  for (let i = 0; i < children; i++) {
    const [rating, index] = rateByIndex[i]
    let candy = 0
    if (rating === ratings[index - 1]) {
      candy = 1
    } else {
      candy = (candies[index - 1] || 0) + 1
    }
    
    if (rating === ratings[index + 1]) {
      candy = Math.max(candy, 1)
    } else {
      candy = Math.max(candy, (candies[index + 1] || 0) + 1)
    }
    candies[index] = candy
  }
  
  return candies.reduce((accumulate, candy) => accumulate + candy)
};