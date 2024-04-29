/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger(nums1, nums2) {
    let min1 = nums1[0];
    let min2 = nums2[0];

    for (let i = 1; i < nums1.length; i++) {
        min1 = Math.min(min1, nums1[i]);
        min2 = Math.min(min2, nums2[i]);
    }

    return min2 - min1;
};