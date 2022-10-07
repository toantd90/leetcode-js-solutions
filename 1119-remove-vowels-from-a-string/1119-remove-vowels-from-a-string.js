/**
 * @param {string} s
 * @return {string}
 */
function removeVowels(s) {
  let nonVowelsStr = ''
  for (let i = 0; i < s.length; i++) {
    if (!'aeiou'.includes(s[i])) {
      nonVowelsStr += s[i]
    }
  }
  
  return nonVowelsStr
};