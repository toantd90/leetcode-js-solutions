/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  let stack = [nums2[nums2.length - 1]];
  let map = { [nums2[nums2.length - 1]]: -1 };

  for (let i = nums2.length - 2; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }
    map[nums2[i]] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(nums2[i]);
  }

  let result = [];
  for (let num of nums1) {
    result.push(map[num]);
  }

  return result;
}
