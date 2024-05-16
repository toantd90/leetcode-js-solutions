/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const uniqueNums = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    if (uniqueNums.has(num - 1)) {
      continue;
    }

    let curNum = num;

    while (uniqueNums.has(curNum + 1)) {
      curNum++;
    }

    longest = Math.max(longest, curNum - num + 1);
  }

  return longest;
}
