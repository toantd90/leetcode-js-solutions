/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const words = s.split(' ');
  const wordsLength = words.length;

  if (pattern.length !== wordsLength) return false;

  let wordMap = {};
  let patternMap = {};

  for (let i = 0; i < wordsLength; i++) {
    if (
      (wordMap[pattern[i]] && wordMap[pattern[i]] !== words[i]) ||
      (patternMap[words[i]] && patternMap[words[i]] !== pattern[i])
    ) {
      return false;
    }

    wordMap[pattern[i]] = words[i];
    patternMap[words[i]] = pattern[i];
  }

  return true;
}
