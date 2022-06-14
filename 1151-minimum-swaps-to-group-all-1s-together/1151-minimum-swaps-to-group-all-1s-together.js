/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let oneCnt = 0
    
    for (let num of data) {
        if (num) oneCnt++
    }
    
    if (oneCnt < 2) return 0
    
    let swap = 0
    
    for (let i = 0; i < oneCnt; i++) {
        if (!data[i]) swap++
    }
    
    let curSwap = swap
    
    for (let i = oneCnt; i < data.length; i++) {
        if (data[i] !== data[i - oneCnt]) {
            if (data[i]) {
                curSwap--
            } else {
                curSwap++
            }
        }
        swap = Math.min(swap, curSwap)
    }

    return swap
};