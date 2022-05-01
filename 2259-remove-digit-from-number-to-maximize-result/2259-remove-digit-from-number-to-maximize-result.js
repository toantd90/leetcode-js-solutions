/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
    let max = new String('0').repeat(number.length)
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            const curNum = number.substring(0, i) + number.substring(i + 1)
            
            if (curNum > max)
                max = curNum
        }
        
    }
    
    return max
};