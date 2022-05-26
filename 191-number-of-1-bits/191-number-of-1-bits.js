/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => n.toString(2).split('').filter(c => c === '1').length