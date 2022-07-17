/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  let cnt =  {}
  for (let num of nums) {
    cnt[num] = (cnt[num] || 0) + 1
  }
  
  let pairs = 0
  let leftover = 0
  
  for (let num in cnt) {
    pairs += Math.floor(cnt[num] / 2)
    leftover += cnt[num] % 2
  }
  
  return [pairs, leftover]
};