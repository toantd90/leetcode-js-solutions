/**
 * @param {string} s
 * @return {number}
 */
function minimizedStringLength(s) {
  let count = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++
  }
  
  let minimizedLength = 0
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) {
      if (count[i] % 2 === 0) {
        minimizedLength += 1
      } else {
        minimizedLength += count[i] % 2
      }
    }
  }
  
  return minimizedLength
};