/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
function maxDivScore(nums, divisors) {
  let maxVisibilityScore = 0;
  let divisorWithMax = 0;
  for (let divisor of divisors) {
    let cnt = 0;
    for (let num of nums) {
      if (num % divisor === 0) {
        cnt++;
      }
    }

    if (cnt > maxVisibilityScore) {
      maxVisibilityScore = cnt;
      divisorWithMax = divisor;
    } else if (cnt === maxVisibilityScore) {
      if (divisorWithMax === 0) {
        divisorWithMax = divisor;
      } else {
        divisorWithMax = Math.min(divisorWithMax, divisor);
      }
    }
  }

  return divisorWithMax;
}
