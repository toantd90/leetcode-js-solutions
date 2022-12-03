/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let frequency = {}
  
  for (let c of s) {
    frequency[c] = (frequency[c] || 0) + 1
  }
  
  let frequencyEntries = Object.entries(frequency)
  
  frequencyEntries.sort((f1, f2) => f2[1] - f1[1])
  
  return frequencyEntries.map(f => f[0].repeat(f[1])).join('')
};