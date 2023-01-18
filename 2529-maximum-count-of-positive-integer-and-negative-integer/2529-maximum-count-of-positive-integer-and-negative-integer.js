function lowerBound(arr, start, end, value) {
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    
    if (arr[mid] < value) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  
  return start
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums) {
  const firstPositiveIndex = lowerBound(nums, 0, nums.length, 1)  
  const firstZeroIndex = lowerBound(nums, 0, firstPositiveIndex, 0)

  return Math.max(firstZeroIndex, nums.length - firstPositiveIndex)
}
