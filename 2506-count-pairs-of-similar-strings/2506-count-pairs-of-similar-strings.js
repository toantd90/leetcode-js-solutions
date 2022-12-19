/**
 * @param {string[]} words
 * @return {number}
 */
function similarPairs(words) {
  let wordCount = new Array(words.length);
  for (let i = 0; i < words.length; i++) {
    let currentCount = new Array(26).fill(false);
    for (let j = 0; j < words[i].length; j++) {
      currentCount[words[i].charCodeAt(j) - 97] = true;
    }

    wordCount[i] = currentCount;
  }

  let numOfPairs = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (wordCount[i].every((count, k) => count === wordCount[j][k])) {
        numOfPairs++;
      }
    }
  }

  return numOfPairs;
}
