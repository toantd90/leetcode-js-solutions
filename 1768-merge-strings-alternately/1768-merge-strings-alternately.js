/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  let i = 0;
  let j = 0;
  let ans = "";

  while (i < word1.length && j < word2.length) {
    ans += word1[i] + word2[j];
    i++;
    j++;
  }

  if (i === word1.length) {
    ans += word2.slice(j);
  } else {
    ans += word1.slice(i);
  }

  return ans;
}
