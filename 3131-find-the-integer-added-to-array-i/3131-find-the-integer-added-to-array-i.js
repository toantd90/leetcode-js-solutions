/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger(nums1, nums2) {
    nums1.sort((n1, n2) => n1 - n2);
    nums2.sort((n1, n2) => n1 - n2);

    return nums2[0] - nums1[0];
};