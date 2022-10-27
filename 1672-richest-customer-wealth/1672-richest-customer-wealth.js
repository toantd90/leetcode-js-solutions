/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  let maximum = 0
  
  for (let row = 0; row < accounts.length; row++) {
    let current = 0
    for (let col = 0; col < accounts[0].length; col++) {
      current += accounts[row][col]
    }
    
    maximum = Math.max(maximum, current)
  }
  
  return maximum
};