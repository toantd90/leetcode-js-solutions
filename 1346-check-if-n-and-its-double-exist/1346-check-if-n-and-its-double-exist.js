const binarySearch = (arr, l, r, target) => {
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return -1
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = arr => {
    arr.sort((n1, n2) => n1 - n2)
    
    for (let i = 0; i < arr.length; i++) {
        let foundIndex = -1
        if (arr[i] > 0)
            foundIndex = binarySearch(arr, i + 1, arr.length - 1, 2 * arr[i])
        else
            foundIndex = binarySearch(arr, 0, i - 1, 2 * arr[i])

        if (foundIndex !== -1) return true
    }
    
    return false
};