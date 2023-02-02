/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
  let ranks = {};

  for (let i = 0; i < 26; i++) {
    ranks[order[i]] = i;
  }

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    const previousWord = words[i - 1];
    for (let j = 0; j < previousWord.length; j++) {
      if (
        ranks[currentWord[j]] == undefined ||
        ranks[previousWord[j]] > ranks[currentWord[j]]
      ) {
        return false;
      } else if (ranks[previousWord[j]] < ranks[currentWord[j]]) {
        break;
      } else {
        continue;
      }
    }
  }

  return true;
}
