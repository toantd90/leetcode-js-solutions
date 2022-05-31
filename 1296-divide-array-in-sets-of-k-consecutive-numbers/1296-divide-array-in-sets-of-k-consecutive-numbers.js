/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const isPossibleDivide = (nums, k) => {
    if (nums.length % k !== 0) return false
    
    let cnt = {}
    
    for (let num of nums) {
        cnt[num] = (cnt[num] || 0) + 1
    }
    
    let uniqueNums = Object.keys(cnt)
    
    for (let i = 0; i < uniqueNums.length; i++) {
        if (!cnt[uniqueNums[i]]) continue
        
        const setCnt = cnt[uniqueNums[i]]
        for (let j = Number(uniqueNums[i]); j < Number(uniqueNums[i]) + k; j++) {
            if (!cnt[j] || cnt[j] < setCnt) return false
            
            cnt[j] -= setCnt
        }
    }
    
    return true
};