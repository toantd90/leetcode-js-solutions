/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
  let maxLength = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j] && (nums1[i] !== nums1[i - 1] || nums2[j] !== nums2[j - 1])) {
        let curLength = 0
        
        let k = i
        let l = j
        
        while (nums1[k] == nums2[l] && k < nums1.length && l < nums2.length) {
          k++
          l++
          curLength++
        }
        
        maxLength = Math.max(maxLength, curLength)
      }
    }
  }
  
  return maxLength
};