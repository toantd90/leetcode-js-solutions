/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfDigits = num => {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  
  return sum
}

const maximumSum = nums => {
  let sumMap = {}
  
  for (let num of nums) {
    const sum = sumOfDigits(num)
    if (!sumMap[sum]) sumMap[sum] = []
    
    sumMap[sum].push(num)
  }
  
  let max = -1
  
  for (let sum in sumMap) {
    const length = sumMap[sum].length
    if (length >= 2) {
      const sortedSum = sumMap[sum].sort((s1, s2) => s1 - s2)
    
      max = Math.max(max, sortedSum[length - 1] + sortedSum[length - 2])
    }
  }
  
  return max
};