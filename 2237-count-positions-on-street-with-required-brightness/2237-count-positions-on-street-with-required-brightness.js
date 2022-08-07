/**
 * @param {number} n
 * @param {number[][]} lights
 * @param {number[]} requirement
 * @return {number}
 */
var meetRequirement = function(n, lights, requirement) {
  let prefix = new Array(n).fill(0)
  
  for (let [position, range] of lights) {
    prefix[Math.max(0, position - range)] += 1
    if (position + range + 1 <= n - 1)
      prefix[position + range + 1] -= 1  
  }
  
  console.log(prefix)
  
  let cnt = prefix[0] >= requirement[0] ? 1 : 0
  for (let i = 1; i < n; i++) {
    prefix[i] += prefix[i - 1]
    
    if (prefix[i] >= requirement[i]) cnt++
  }
  
  return cnt
};