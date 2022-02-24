const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}




/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
    if (digits.length === 0) return []
    
    let res = []
    
    const backtrack = (list = []) => {
        if (list.length === digits.length) {
            res.push(list.join(''))
        } else {
            const index = list.length
            const digit = digits[index]
            const chars = map[digit]
            for (let i = 0; i < chars.length; i++) {
                list.push(chars[i])
                backtrack(list)
                list.pop()
            }
        }
    }
    
    backtrack()
    
    return res
};