// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// const swap = (nums, i, j) => {
//     if (i !== j)
//         [nums[i], nums[j]] = [nums[j], nums[i]]
// }
// const permutation = (nums, l, r, res) => {
//     if (l === r) {
//         res.push([...nums])
//     } else {
//         for (let i = l; i < r; i++) {
//             swap(nums, i, l)
//             permutation(nums, l + 1, r, res)
//             swap(nums, i, l)
//         }
//     }
// }
// const permute = nums => {
//     let res = []
//     permutation(nums, 0, nums.length, res)
    
//     return res
// };

const backtracking = (res, tempList, nums) => {
    if (tempList.length === nums.length) {
        res.push([...tempList])
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (tempList.includes(nums[i])) continue
            tempList.push(nums[i])
            backtracking(res, tempList, nums)
            tempList.pop()
        }
    }
}

const permute = nums => {
    let res = []
    backtracking(res, [], nums)
    
    return res
};