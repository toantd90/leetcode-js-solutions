/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let ans = [[], []];

  for (let num of set1) {
    if (!set2.has(num)) {
      ans[0].push(num);
    }
  }

  for (let num of set2) {
    if (!set1.has(num)) {
      ans[1].push(num);
    }
  }

  return ans;
}
