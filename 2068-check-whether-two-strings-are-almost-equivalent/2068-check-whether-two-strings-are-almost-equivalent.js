/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function checkAlmostEquivalent(word1, word2) {
  let charCount = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    charCount[word1.charCodeAt(i) - 97]++;
    charCount[word2.charCodeAt(i) - 97]--;
  }

  return charCount.every((count) => Math.abs(count) <= 3);
}
