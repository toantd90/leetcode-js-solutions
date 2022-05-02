/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = nums => {
    let r = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] % 2 === 1 && r > i) {
            [nums[i], nums[r]] = [nums[r], nums[i]]
            r--
        }
        if (r <= i) break
    }
    
    return nums
};