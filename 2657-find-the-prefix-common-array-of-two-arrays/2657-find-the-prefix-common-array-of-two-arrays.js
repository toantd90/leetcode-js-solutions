/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(A, B) {
  let countA = {};
  let countB = {};
  let currentCommon = 0;
  let ans = [];

  for (let i = 0; i < A.length; i++) {
    countA[A[i]] = (countA[A[i]] || 0) + 1;
    countB[B[i]] = (countB[B[i]] || 0) + 1;

    if (A[i] === B[i]) {
      currentCommon++;
      ans.push(currentCommon);
      continue;
    }

    if (countA[B[i]] > 0) {
      currentCommon++;
    }

    if (countB[A[i]] > 0) {
      currentCommon++;
    }

    ans.push(currentCommon);
  }

  return ans;
}
