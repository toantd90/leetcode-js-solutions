/**
 * @param {string} s
 * @return {string}
 */
function makeGood(s) {
  if (s.length < 2) return s
  let chars = []
  
  for (let i = 0; i < s.length; i++) {
    if (chars.length == 0) {
      chars.push(s[i])
    } else {
      const previousCharCode = chars[chars.length - 1].charCodeAt(0)
      const currentCharCode = s.charCodeAt(i)
      
      if (Math.abs(previousCharCode - currentCharCode) !== 32) {
        chars.push(s[i])
      } else {
        chars.pop()
      }
    }
  }
  
  return chars.join('')
};