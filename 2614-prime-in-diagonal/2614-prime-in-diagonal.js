function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n); //returns the square root of the passed value
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
}

/**
 * @param {number[][]} nums
 * @return {number}
 */
function diagonalPrime(nums) {
  const n = nums.length;
  let maxPrime = 0;

  for (let i = 0; i < n; i++) {
    if (isPrime(nums[i][i])) {
      maxPrime = Math.max(maxPrime, nums[i][i]);
    }

    if (isPrime(nums[i][Math.abs(n - i - 1)])) {
      maxPrime = Math.max(maxPrime, nums[i][Math.abs(n - i - 1)]);
    }
  }

  return maxPrime;
}
