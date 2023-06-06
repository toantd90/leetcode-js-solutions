/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  const sortedArr = [...arr].sort((n1, n2) => n1 - n2);

  let diff = sortedArr[1] - sortedArr[0];
  for (let i = 2; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}
