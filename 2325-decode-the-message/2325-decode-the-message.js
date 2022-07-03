/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = (key, message) => {
  let substitutionTable = {}
  
  for (let i = 0; i < 26; i++) {
    substitutionTable[String.fromCharCode(97 + i)] = ''
  }
  
  let i = 0
  let j = 0
  while (j < 26) {
    if (!substitutionTable[key[i]] && key[i] !== ' ') {
      substitutionTable[key[i]] = String.fromCharCode(97 + j)
      j++  
    }
    i++
  }
  
  substitutionTable[' '] = ' '
  
  let ans = ''
  
  for (let i = 0; i < message.length; i++) {
    ans += substitutionTable[message[i]]
  }
  
  return ans
};