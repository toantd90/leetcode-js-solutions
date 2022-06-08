/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = s => s === s.split('').reverse().join('') ? 1 : 2