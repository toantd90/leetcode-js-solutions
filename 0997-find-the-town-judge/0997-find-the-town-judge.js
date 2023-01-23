/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  let isJudge = new Array(n).fill(true);
  let trusted = new Array(n).fill(0);

  for (let [a, b] of trust) {
    isJudge[a - 1] = false;
    trusted[b - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (isJudge[i] && trusted[i] === n - 1) {
      return i + 1;
    }
  }

  return -1;
}
