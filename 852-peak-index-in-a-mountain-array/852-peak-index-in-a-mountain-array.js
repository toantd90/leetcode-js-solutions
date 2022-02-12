/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = arr => {
    let l = 0
    let r = arr.length - 1
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid
        } else if (arr[mid - 1] > arr[mid + 1]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
};