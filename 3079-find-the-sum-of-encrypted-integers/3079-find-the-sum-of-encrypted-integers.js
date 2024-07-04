/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
    let sum = 0;

    for (let num of nums) {
        let max = 0;
        let count = 0;
        while (num >= 1) {
            max = Math.max(max, num % 10);
            num = Math.floor(num / 10);
            count++;
        }

        for (let i = 0; i < count; i++) {
            sum += Math.pow(10, i) * max;
        }
    }

    return sum;
};