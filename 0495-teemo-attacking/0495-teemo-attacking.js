/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
  if (duration == 0) return 0
  let poisonedDuration = duration
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] < duration) {
      poisonedDuration -= duration - (timeSeries[i] - timeSeries[i - 1])
    }
    
    poisonedDuration += duration
  }
    
  return poisonedDuration
};