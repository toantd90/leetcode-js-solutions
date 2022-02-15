/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    const n = nums.length
    nums.sort((n1, n2) => n1 - n2)
    let sumClosest
    
    for (let i = 0; i < n - 2; i++) {
        let l = i + 1
        let r = n - 1
        
        while (l < r) {
            const curSum = nums[i] + nums[l] + nums[r]
            if (sumClosest === undefined) {
                sumClosest = curSum
                continue
            }
            const curDif = Math.abs(target - sumClosest)
            const newDif = Math.abs(target - curSum)
            
            sumClosest = newDif < curDif ? curSum : sumClosest
            
            if (curSum <= target) {
                l++
            } else {
                r--
            }
        }
    }
    return sumClosest
};