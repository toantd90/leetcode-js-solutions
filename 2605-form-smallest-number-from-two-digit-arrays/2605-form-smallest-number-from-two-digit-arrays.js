/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minNumber(nums1, nums2) {
  nums1.sort((n1, n2) => n1 - n2);
  nums2.sort((n1, n2) => n1 - n2);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        return nums1[i];
      }
    }
  }

  return Number(
    nums1[0] < nums2[0] ? nums1[0] + '' + nums2[0] : nums2[0] + '' + nums1[0]
  );
}
