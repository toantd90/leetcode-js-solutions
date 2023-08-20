/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function minimumSum(n, k) {
  let sum = 0;
  let nums = new Set();
  let num = 1;
  for (let i = 0; num <= k && i < n; i++) {
    while (nums.has(k - num)) {
      num++;
    }
    sum += num;
    nums.add(num);
    num++;
  }

  if (nums.size < n) {
    sum += ((k + (k + n - nums.size + 1)) * (n - nums.size)) / 2;
  }

  return sum;
}
