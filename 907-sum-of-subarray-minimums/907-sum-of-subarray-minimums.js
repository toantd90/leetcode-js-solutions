/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = arr => {
    let minimums = 0
    const len = arr.length
    
    for (let i = 0; i < len; i++) {
        let min = arr[i]
       
        for (let j = i; j < len; j++) {
            min = Math.min(min, arr[j])
            minimums += min
        }
    }
    
    return minimums % (1e9 + 7)
};