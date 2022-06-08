/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s === s.split('').reverse().join('')) return 1
    return 2
};