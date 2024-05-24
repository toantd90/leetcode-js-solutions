/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const set = new Set(word);
  let res = 0;

  for (let i = 0; i < 26; i++) {
    if (
      set.has(String.fromCharCode(65 + i)) &&
      set.has(String.fromCharCode(97 + i))
    ) {
      res++;
    }
  }

  return res;
};
