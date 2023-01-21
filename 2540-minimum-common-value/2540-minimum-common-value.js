/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
  let i1 = 0;
  let i2 = 0;

  while (i1 < nums1.length && i2 < nums2.length) {
    while (i1 < nums1.length && nums1[i1] < nums2[i2]) {
      i1++;
    }

    while (i2 < nums2.length && nums2[i2] < nums1[i1]) {
      i2++;
    }
    
    if (nums1[i1] == nums2[i2]) {
      return nums1[i1]
    }
  }
  

  return -1;
}
