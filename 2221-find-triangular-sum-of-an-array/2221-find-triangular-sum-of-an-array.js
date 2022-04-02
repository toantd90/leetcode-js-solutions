/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = nums => {
    let prev = nums
    let arr = new Array(nums.length - 1)
    for (let i = nums.length - 1; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            arr[j] = (prev[j] + prev[j + 1]) % 10
        }
        prev = arr
    }

    return prev[0]
};