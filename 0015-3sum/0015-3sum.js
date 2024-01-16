/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((n1, n2) => n1 - n2);
  
  let triplets = []
  for (let i = 0; i < nums.length - 2; i++) {
    const target = -nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        const triplet = [nums[i], nums[l], nums[r]]
        triplets.push(triplet);
        
        while (l < r && triplet[1] === nums[l]) {
          l++;
        }

        while (l < r && triplet[2] === nums[r]) {
          r--;
        }
      }
    }
    
    
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  
  return triplets
};