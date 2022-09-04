/**
 * @param {number} n
 * @return {boolean}
 */
function isStrictlyPalindromic(n) {
  for (let i = 2; i <= n - 2; i++) {
    const base = n.toString(i)
    let isPalindromic = true
    
    for (let j = 0; j < Math.ceil(base.length / 2); j++) {
      if (base[j] != base[base.length - j - 1]) {
        isPalindromic = false
        break
      }
    }
    
    if (!isPalindromic) {
      return false
    }
  }
  
  return false
};