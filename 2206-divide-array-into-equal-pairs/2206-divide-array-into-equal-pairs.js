/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = nums => {
    let cnt = {}
    for (let num of nums) {
        cnt[num] = (cnt[num] || 0) + 1
    }
    
    const entries = Object.entries(cnt)
    
    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i]
        if (value % 2 === 1) return false
    }
    
    return true
};