/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    const n = nums.length
    let sumClosest = nums[0] + nums[1] + nums[2]
    if (n === 3) return sumClosest
    nums.sort((n1, n2) => n1 - n2)
    
    for (let i = 0; i < n - 2; i++) {
        let l = i + 1
        let r = n - 1
        
        while (l < r) {
            const curSum = nums[i] + nums[l] + nums[r]
            if (curSum === target) return target
            
            if (Math.abs(target - curSum) < Math.abs(target - sumClosest))
                sumClosest = curSum
            
            if (curSum <= target) {
                l++
            } else {
                r--
            }
        }
    }

    return sumClosest
};