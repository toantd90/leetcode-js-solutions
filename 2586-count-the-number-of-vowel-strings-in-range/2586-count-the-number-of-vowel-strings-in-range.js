function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function vowelStrings(words, left, right) {
  let vowelCount = 0;

  for (let i = left; i <= right; i++) {
    if (isVowel(words[i][0]) && isVowel(words[i][words[i].length - 1])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
