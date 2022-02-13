/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    nums.sort((n1, n2) => n1 - n2)
    const len = nums.length
    let res = new Set()
    for (let i = 0; i < len; i++) {
        const sum = -nums[i]
        let l = i + 1
        let r = len - 1
        
        if (l > r - 1) continue
        else {
            while (l <= r - 1) {
                const curSum = nums[l] + nums[r]
                if (curSum === sum) {
                    res.add(`${nums[i]}*${nums[l]}*${nums[r]}`)
                    r--
                } else if (curSum > sum) {
                    r--
                } else {
                    l++
                }
            }
        }
    }
    return Array.from(res).map(el => el.split('*'))
};