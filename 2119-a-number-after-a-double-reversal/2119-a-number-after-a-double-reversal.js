/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = num => {
    const reversed1 = Number(num.toString().split('').reverse().join(''))
    const reversed2 = Number(reversed1.toString().split('').reverse().join(''))
    
    return reversed2 === num
};