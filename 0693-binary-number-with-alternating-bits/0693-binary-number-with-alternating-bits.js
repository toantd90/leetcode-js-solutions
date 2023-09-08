/**
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
  const bits = n.toString(2);

  for (let i = 1; i < bits.length; i++) {
    if (bits[i] === bits[i - 1]) {
      return false;
    }
  }

  return true;
}
