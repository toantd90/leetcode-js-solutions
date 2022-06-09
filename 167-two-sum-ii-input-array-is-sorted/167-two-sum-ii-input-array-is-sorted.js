/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let l = 0, r = numbers.length - 1
    
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        if (sum === target) {
            return [l + 1, r + 1]
        } else if (sum > target) {
            r--
        } else {
            l++
        }
    }
};