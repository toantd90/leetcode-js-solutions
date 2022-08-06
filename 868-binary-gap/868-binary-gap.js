/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  const binaryString = n.toString(2)
  
  let gap = 0
  
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] == 1) {
      let end = i + 1
      while (binaryString[end] == 0) {
        end++
      }
      
      if (binaryString[end] == 1) {
        gap = Math.max(gap, end - i)
        end -= 1
      }
      
      i = end 
    }
  }
  
  return gap
};