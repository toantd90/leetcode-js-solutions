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
    patternMap[words[i]] == pattern[i];
  }

  return true;
}
function isAllLetterFollowRule(string, startIndex, isLowerCase) {
  for (let i = 1; i < string.length; i++) {
    if (
      (isLowerCase && string.charCodeAt(i) < 97) ||
      (!isLowerCase && string.charCodeAt(i) >= 97)
    ) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  if (word.charCodeAt(0) >= 97 || word.charCodeAt(1) >= 97) {
    return isAllLetterFollowRule(word, 1, true);
  } else {
    return isAllLetterFollowRule(word, 1, false);
  }
}
