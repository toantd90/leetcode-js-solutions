/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  if (n == 0) return 0;
  if (n < 3) return 1;

  let first = 0;
  let second = 1;
  let third = 1;

  for (let i = 3; i <= n; i++) {
    const temp = first + second + third;
    first = second;
    second = third;
    third = temp;
  }

  return third;
}
