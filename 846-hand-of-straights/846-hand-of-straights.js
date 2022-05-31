/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false
    
    let cnt = {}
    for (let value of hand) {
        cnt[value] = (cnt[value] || 0) + 1
    }
    
    let nums = Object.keys(cnt)
    nums.sort((value1, value2) => value1 - value2)
    
    for (let i = 0; i < nums.length; i++) {
        if (cnt[nums[i]] === 0) continue
        const groupCnt = cnt[nums[i]] 
        for (let j = Number(nums[i]); j < Number(nums[i]) + groupSize; j++) {
            if (!cnt[j] || cnt[j] < groupCnt) return false
            cnt[j] -= groupCnt
        }
    }
    
    return true
};