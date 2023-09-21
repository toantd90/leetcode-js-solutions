/**
 * @param {string} s
 * @return {number}
 */
function secondHighest(s) {
  let numSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      numSet.add(Number(s[i]));
    }
  }

  const sortedNums = Array.from(numSet).sort((n1, n2) => n2 - n1);
  return sortedNums[1] !== undefined ? sortedNums[1] : -1;
}
