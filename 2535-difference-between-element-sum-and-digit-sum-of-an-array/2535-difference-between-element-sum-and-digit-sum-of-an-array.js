function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function differenceOfSum(nums) {
  let elementSum = 0;
  let digitSum = 0;

  for (let num of nums) {
    elementSum += num;
    digitSum += getDigitSum(num);
  }

  return Math.abs(elementSum - digitSum);
}
