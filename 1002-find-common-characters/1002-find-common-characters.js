/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  let count = new Array(26).fill(0)
  
  for (let i = 0; i < words[0].length; i++) {
    count[words[0].charCodeAt(i) - 97]++
  }
  
  for (let i = 1; i < words.length; i++) {
    let currentCount = new Array(26).fill(0)
    
    for (let j = 0; j < words[i].length; j++) {
      currentCount[words[i].charCodeAt(j) - 97]++
    }
    
    for (let i = 0; i < 26; i++) {
      count[i] = Math.min(count[i], currentCount[i])
    }
  }
  
  let result = []
  
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) {
      result.push(... new Array(count[i]).fill(String.fromCharCode(i + 97)))
    }
  }
  
  return result
  
};