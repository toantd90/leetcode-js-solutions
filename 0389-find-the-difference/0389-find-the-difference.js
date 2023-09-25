/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
  let letterCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    letterCount[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    letterCount[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (letterCount[i] === -1) {
      return String.fromCharCode(97 + i);
    }
  }

  return "";
}
