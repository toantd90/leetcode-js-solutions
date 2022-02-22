/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = number => {
    let digits = []
      for (let num of number) {
        if (num !== ' ' && num !== '-') {
            digits.push(num)
        }
      }
    let res = []
    
    let i = 0
    
    while (digits.length - i > 4) {
        res.push(digits.slice(i, i + 3).join(''))
        i += 3
    }
    
    if (digits.length - i === 4) {
        res.push(digits.slice(i, i + 2).join(''))
        res.push(digits.slice(i + 2, digits.length).join(''))
    } else {
        res.push(digits.slice(i, digits.length).join(''))
    }
    
    return res.join('-')
};