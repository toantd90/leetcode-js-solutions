/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = n => {
    let left = 1
    let right = n
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        let pick = guess(mid)
        
        if (pick === 0) {
          return mid
        } else if (pick === 1) {
           left = mid + 1 
        } else {
           right = mid - 1
        }
    }
};