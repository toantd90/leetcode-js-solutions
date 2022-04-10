/**
 * @param {number} num
 * @return {number}
 */
const largestInteger = num => {
    let str = num.toString()
    let odd = []
    let even = []
    for (let c of str) {
        if (Number(c) % 2 === 0) {
            even.push(c)
        } else {
            odd.push(c)
        }
    }
    
    odd.sort((n1, n2) => n2 - n1)
    even.sort((n1, n2) => n2 - n1)
    let oddI = 0, evenI = 0
    let res = []
    
    
    for (let c of str) {
        if (Number(c) % 2 === 0) {
            res.push(even[evenI++])
        } else {
            res.push(odd[oddI++])
        }
    }
    
    return Number(res.join(''))
};