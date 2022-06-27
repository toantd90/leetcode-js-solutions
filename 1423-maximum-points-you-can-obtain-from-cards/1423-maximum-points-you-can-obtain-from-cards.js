/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const n = cardPoints.length
  
  let min = Number.POSITIVE_INFINITY
  let sum = 0
  let curMin = 0
  
  for (let i = 0; i < cardPoints.length; i++) {
    curMin += cardPoints[i]
    sum += cardPoints[i]

    if (i >= n - k - 1) {
      curMin -= cardPoints[i - n + k] || 0
      min = Math.min(min, curMin)
    }
  }
  
  return sum - min
};