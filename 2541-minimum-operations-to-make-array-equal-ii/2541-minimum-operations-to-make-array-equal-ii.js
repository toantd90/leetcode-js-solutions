/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function minOperations(nums1, nums2, k) {
  let increment = 0;
  let decrement = 0;

  for (let i = 0; i < nums1.length; i++) {
    let diff = nums1[i] - nums2[i];

    if (k === 0 && nums1[i] === nums2[i]) continue
    if (diff % k !== 0) return -1;

    if (diff < 0) {
      increment += Math.abs(diff) / k;
    } else {
      decrement += diff / k;
    }
  }

  return increment === decrement ? increment : -1;
}
