/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
  let frequency = new Array(26).fill(0)
    
  for (let i = 0; i < s.length; i++) {
    frequency[s.charCodeAt(i) - 97]++
  }
  
  frequency.sort((f1, f2) => f2 - f1)
  
  let deletions = 0
  
  for (let i = 0; i < 26; i++) {
    if (!frequency[i]) break
    
    let j = i + 1
    while (frequency[i] === frequency[j]) {
      frequency[j]--
      j++
    }
    
    deletions += j - i - 1
  }
  
  return deletions
};