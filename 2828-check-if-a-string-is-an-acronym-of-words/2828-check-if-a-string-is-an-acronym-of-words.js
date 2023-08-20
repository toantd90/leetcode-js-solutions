/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
function isAcronym(words, s) {
  if (words.length !== s.length) return false;

  let concatS = "";

  words.forEach((word) => (concatS += word[0]));

  return concatS === s;
}
