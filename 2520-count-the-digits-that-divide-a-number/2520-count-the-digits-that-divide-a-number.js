/**
 * @param {number} num
 * @return {number}
 */
function countDigits(num) {
  let count = 0;
  let temp = num;

  while (temp > 0) {
    count += num % (temp % 10) === 0 ? 1 : 0;
    temp = Math.floor(temp / 10);
  }

  return count;
}
