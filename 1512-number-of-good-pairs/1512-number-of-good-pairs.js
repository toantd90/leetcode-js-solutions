/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
  let numCount = new Array(101).fill(0);

  for (let num of nums) {
    numCount[num]++;
  }

  let numOfPairs = 0;

  for (let count of numCount) {
    numOfPairs += (count * (count - 1)) / 2;
  }

  return numOfPairs;
}
