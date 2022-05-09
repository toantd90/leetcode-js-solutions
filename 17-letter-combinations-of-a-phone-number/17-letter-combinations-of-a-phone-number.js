/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
    const digitMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w','x', 'y', 'z'],
    }
    
    let result = []
    for (let digit of digits) {
       if (!result.length) {
           result = [...digitMap[digit]]
       } else {
           const size = result.length
           for (let i = 0; i < size; i++) {
               for (let letter of digitMap[digit]) {
                   result.push(result[i] + letter)
               }
           }
           
           result.splice(0, size)
       }
    }
    
    return result
};