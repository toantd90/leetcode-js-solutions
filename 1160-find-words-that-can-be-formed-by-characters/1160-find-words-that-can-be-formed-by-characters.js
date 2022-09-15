function charCount(word) {
  const A_CHAR_CODE = 97;
  let charCnt = new Array(26).fill(0);

  for (let i = 0; i < word.length; i++) {
    charCnt[word.charCodeAt(i) - A_CHAR_CODE]++;
  }

  return charCnt;
}

function isGoodString(wordCnt, goodCnt) {
  for (let i = 0; i < 26; i++) {
    if (wordCnt[i] > goodCnt[i]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  const charsCount = charCount(chars);
  let length = 0;

  for (let word of words) {
    const wordCharCount = charCount(word);

    if (isGoodString(wordCharCount, charsCount)) {
      length += word.length;
    }
  }

  return length;
}
