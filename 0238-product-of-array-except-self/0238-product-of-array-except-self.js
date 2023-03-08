/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let zeroCount = 0;
  let productAll = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      productAll *= nums[i];
    }
  }

  if (zeroCount > 1) {
    return new Array(nums.length).fill(0);
  }

  return nums.map((num) =>
    num === 0 ? productAll : zeroCount === 1 ? 0 : productAll / num
  );
}
