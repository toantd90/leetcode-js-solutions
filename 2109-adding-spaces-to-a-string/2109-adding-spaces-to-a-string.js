/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
const addSpaces = (s, spaces) => {
    let res = ''
    for (let i = 0; i < spaces.length; i++) {
        res = res + s.substring((spaces[i - 1] || 0), spaces[i]) + ' '
    }
        
    return res + s.substring(spaces.pop())
};