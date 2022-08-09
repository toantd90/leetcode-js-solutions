/**
 * @param {string} s
 * @return {string}
 */
function makeFancyString(s) {
  let fancyString = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      let j = i
      while (s[j] == s[j - 1]) {
        j++
      }
      
      fancyString += s[i]
      i = j - 1
    } else {
      fancyString += s[i]
    }
  }
  
  return fancyString
};