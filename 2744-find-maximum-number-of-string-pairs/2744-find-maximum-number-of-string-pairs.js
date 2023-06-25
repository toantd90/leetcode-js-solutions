/**
 * @param {string[]} words
 * @return {number}
 */
function maximumNumberOfStringPairs(words) {
  const reversedWords = words.map((word) => word.split("").reverse().join(""));
  let numOfPairs = 0;

  for (let i = 0; i < reversedWords.length; i++) {
    for (let j = i + 1; j < reversedWords.length; j++) {
      if (reversedWords[i] === words[j]) {
        numOfPairs++;
      }
    }
  }

  return numOfPairs;
}
