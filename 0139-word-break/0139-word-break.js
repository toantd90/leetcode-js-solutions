function wordSearchByIndex(wordsMap, s, currentIndex, memo) {
  if (currentIndex === s.length) {
    return true;
  }

  if (!wordsMap[s[currentIndex]]) {
    return false;
  }
  
  if (memo[currentIndex] !== null) {
    return memo[currentIndex]
  }

  for (let nextWord of wordsMap[s[currentIndex]]) {
    if (
      nextWord === s.slice(currentIndex, currentIndex + nextWord.length) &&
      wordSearchByIndex(wordsMap, s, currentIndex + nextWord.length, memo)
    ) {
      return memo[currentIndex] = true;
    }
  }

  return memo[currentIndex] = false;
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  let wordsMapByFirstLetter = {};

  for (let word of wordDict) {
    if (!wordsMapByFirstLetter[word[0]]) {
      wordsMapByFirstLetter[word[0]] = [];
    }
    wordsMapByFirstLetter[word[0]].push(word);
  }

  if (!wordsMapByFirstLetter[s[0]]) {
    return false;
  }
  
  let memo = new Array(s.length).fill(null)

  return wordSearchByIndex(wordsMapByFirstLetter, s, 0, memo);
}
