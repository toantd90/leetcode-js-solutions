/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
   let map = {}
   let cnt = 0
   
   for (let i = 0; i < nums.length; i++) {
       const remain = k - nums[i]
       if (map[remain]) {
           map[remain]--
           cnt++
       } else {
           map[nums[i]] = (map[nums[i]] || 0) + 1
       }
   }
    
   return cnt
};