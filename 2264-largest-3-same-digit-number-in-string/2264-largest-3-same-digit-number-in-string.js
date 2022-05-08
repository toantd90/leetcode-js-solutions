/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = num => {
    const sameDigitNums = ['999', '888', '777', '666', '555', '444', '333', '222', '111', '000']
    for (let i = 0; i < sameDigitNums.length; i++) {
        if (num.indexOf(sameDigitNums[i]) !== -1) {
            return sameDigitNums[i]
        }
    }
    
    return ''
};