// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// function minStartValue(nums) {
//   let prefixSum = nums[0];
//   let minPrefixSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     prefixSum += nums[i];
//     minPrefixSum = Math.min(minPrefixSum, prefixSum);
//   }

//   return minPrefixSum > 0 ? 1 : 1 - minPrefixSum;
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = nums[0];
    let min = nums[0];
    
    let j = 1;
    
    while (j < nums.length) {
        sum += nums[j];
        min = Math.min(min, sum);
        console.log(sum, min)
        j++;
    }
    
    return min > 0 ? 1 : Math.abs(min) + 1;
};