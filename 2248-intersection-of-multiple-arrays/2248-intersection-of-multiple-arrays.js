/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = nums => {
    let map = {}
    let ans = []
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            map[nums[i][j]] = (map[nums[i][j]] || 0) + 1
            
            if (map[nums[i][j]] === nums.length) {
                ans.push(nums[i][j])
            }
        }
    }
    
    return ans.sort((n1, n2) => n1 - n2)
};