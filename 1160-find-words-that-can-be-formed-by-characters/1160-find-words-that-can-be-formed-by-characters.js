/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let charsCnt = chars.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
  
  let charWords = []
  let sumLen = 0
  for (let word of words) {
    let charCnt = {}
    let chars = []
    for (let char of word) {
      if (!charCnt[char]) {
        charCnt[char] = 0
        chars.push(char)
      }
      charCnt[char]++
    }
    
    if (chars.every(char => charCnt[char] <= charsCnt[char])) {
      sumLen += word.length
    }
  }
  
  return sumLen
};