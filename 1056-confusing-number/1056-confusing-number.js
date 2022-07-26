const invalidNums = ['2', '3', '4', '5', '7']

/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
  const nums = n.toString().split('').reverse()
  let rotated = '' 
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (invalidNums.includes(num)) {
      return false
    }
    
    if (num == '6') {
      rotated += '9'
    } else if (num == '9') {
      rotated += '6'
    } else {
      rotated += num
    }
  }
  
  
  return n.toString() !== rotated
};