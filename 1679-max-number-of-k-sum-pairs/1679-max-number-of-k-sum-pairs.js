/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
   let map = new Map()
   let cnt = 0
   
   for (let i = 0; i < nums.length; i++) {
       if (map.has(k-nums[i]) && map.get(k-nums[i]) > 0) {
            cnt++
            map.set(k-nums[i], map.get(k-nums[i]) - 1)
        } else {
            map.set(nums[i], map.get(nums[i]) + 1 || 1)
        }
   }
    
   return cnt
};