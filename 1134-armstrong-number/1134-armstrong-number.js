/**
 * @param {number} n
 * @return {boolean}
 */
function isArmstrong(n) {
  const k = n.toString().length;
  let sum = 0;
  let clonedN = n;

  while (clonedN > 0) {
    sum += Math.pow(clonedN % 10, k);
    clonedN = Math.floor(clonedN / 10);
  }

  return sum === n;
}
