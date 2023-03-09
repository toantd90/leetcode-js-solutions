/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
function indexPairs(text, words) {
  let pairs = [];
  for (let word of words) {
    let index = text.indexOf(word);

    while (index >= 0) {
      pairs.push([index, index + word.length - 1]);
      index = text.indexOf(word, index + 1);
    }
  }

  return pairs.sort(([s1, e1], [s2, e2]) => {
    if (s1 > s2) {
      return 1;
    } else if (s1 < s2) {
      return -1;
    } else {
      if (e1 > e2) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}
