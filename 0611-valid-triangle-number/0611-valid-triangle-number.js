function upperBound(arr, start, end, value) {
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] >= value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
  nums.sort((n1, n2) => n1 - n2);
  
  let numOfTriplets = 0
  
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const lastIndex = upperBound(nums, j + 1, nums.length - 1, nums[i] + nums[j]);
      
      numOfTriplets += lastIndex - j
    }
  }
  
  return numOfTriplets;
};