/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  
  let count1 = new Array(26).fill(0)
  let count2 = new Array(26).fill(0)
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 97]++
    count2[word2.charCodeAt(i) - 97]++
  }
  
  
  for (let i = 0; i < 26; i++) {
    if ((count1[i] == 0 && count2[i] > 0) || (count1[i] > 0 && count2[i] == 0)) {
      return false
    }
  }
  
  count1.sort((c1, c2) => c1 - c2)
  count2.sort((c1, c2) => c1 - c2)
  
  return count1.every((c, i) => c == count2[i])
};