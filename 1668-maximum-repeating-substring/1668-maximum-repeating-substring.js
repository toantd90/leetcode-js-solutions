/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(s, w) {
  if (s.length < w.length) return 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let sI = i
    let wI = 0
    let isSubstring = false
    while (s[sI] == w[wI]) {
      sI++
      wI++
      
      if (wI == w.length) {
        isSubstring = true
        wI = 0
      }
    }
    if (isSubstring && sI > i) {
      max = Math.max(max, Math.floor((sI - i) / w.length))
    }
  }
  
  return max
};


"aaabaaaabaaabaaaabaaaabaaaabaaaaba"
"aaaba"