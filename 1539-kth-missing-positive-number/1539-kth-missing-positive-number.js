/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
    let l = 0, r = arr.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        const missedNumber = arr[mid] - mid - 1
        
        if (missedNumber < k) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l + k
};