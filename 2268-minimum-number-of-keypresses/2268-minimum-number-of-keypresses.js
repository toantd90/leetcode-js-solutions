/**
 * @param {string} s
 * @return {number}
 */
function minimumKeypresses(s) {
  let count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
  }

  count = count.sort((c1, c2) => c2 - c1).filter((c) => c > 0);

  if (count.length < 10) return s.length;

  let minKeyPress = 0;
  let pressTime = 1;

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < 9 && j + i < count.length; j++) {
      minKeyPress += count[i + j] * pressTime;
    }

    pressTime++;
    i += 8;
  }

  return minKeyPress;
}
