/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minProductSum = (nums1, nums2) => {
    nums1.sort((n1, n2) => n1 - n2)
    nums2.sort((n1, n2) => n2 - n1)
    
    let productSum = 0
    for (let i = 0; i < nums1.length; i++) {
        productSum += nums1[i] * nums2[i]
    }
    
    return productSum
};