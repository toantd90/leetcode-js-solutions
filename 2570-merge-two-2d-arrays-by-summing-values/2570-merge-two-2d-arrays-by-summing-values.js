/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
  let i1 = 0;
  let i2 = 0;
  let merged = [];

  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1][0] < nums2[i2][0]) {
      merged.push(nums1[i1]);
      i1++;
    } else if (nums1[i1][0] > nums2[i2][0]) {
      merged.push(nums2[i2]);
      i2++;
    } else {
      merged.push([nums1[i1][0], nums1[i1][1] + nums2[i2][1]]);
      i1++;
      i2++;
    }
  }

  if (i1 < nums1.length) merged.push(...nums1.slice(i1));
  if (i2 < nums2.length) merged.push(...nums2.slice(i2));

  return merged;
}
