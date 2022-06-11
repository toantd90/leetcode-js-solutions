const binarySearch = (arr, target) => {
    let l = 0
    let r = arr.length - 1
    
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        
        if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
}

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((p1, p2) => p1 - p2)
    
    const n = spells.length
    const m = potions.length
    
    let res = []
    
    for (let s of spells) {
        const min = Math.ceil(success / s)
        const index = binarySearch(potions, min)
        
        res.push(m - index)
    }
    
    return res
};