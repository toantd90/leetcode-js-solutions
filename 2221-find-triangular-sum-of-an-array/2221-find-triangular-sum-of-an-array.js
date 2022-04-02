/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = nums => {
    let prev = nums

    for (let i = nums.length - 1; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            prev[j] = (prev[j] + prev[j + 1]) % 10
        }
    }

    return prev[0]
};