const invalidNums = ['2', '3', '4', '5', '7']

/**
 * @param {number} n
 * @return {boolean}
 */
const confusingNumber = n => {
  const nums = n.toString()
  let rotated = '' 
  for (let i = nums.length - 1; i >= 0; i--) {
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