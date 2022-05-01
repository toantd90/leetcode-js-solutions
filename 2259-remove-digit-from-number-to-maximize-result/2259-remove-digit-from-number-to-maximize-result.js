/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
    let max = -Infinity
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            let curNum = number.substring(0, i) + number.substring(i + 1)
            
            if (max === -Infinity) {
                max = curNum
                continue
            }
            if (BigInt(curNum) > BigInt(max))
                max = curNum
        }
        
    }
    
    return max.toString()
};