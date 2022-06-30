/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  const n = nums.length
  nums.sort((n1, n2) => n1 - n2)
  const average = nums[Math.floor(n / 2)]
    
  let moves = 0
    
  nums.forEach(num => moves += Math.abs(num - average))
  
  return moves
};

