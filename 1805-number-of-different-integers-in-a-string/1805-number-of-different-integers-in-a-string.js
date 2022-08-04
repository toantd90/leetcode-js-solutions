/**
 * @param {string} word
 * @return {number}
 */
function numDifferentIntegers(word) {
  const numberChars = new Set([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]);
  let nums = new Set();

  for (let i = 0; i < word.length; i++) {
    if (numberChars.has(word[i])) {
      let num = '';
      while (numberChars.has(word[i])) {
        if (num || word[i] !== '0')
          num += word[i];
        i++;
      }
      nums.add(num);
    }
  }

  return nums.size;
}
