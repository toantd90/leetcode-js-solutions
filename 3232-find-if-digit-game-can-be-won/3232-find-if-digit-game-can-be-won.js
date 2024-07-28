/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    let singleDigitSum = 0;
    let doubleDigitSum = 0;

    for (let num of nums) {
        if (num > 9) {
            doubleDigitSum += num;
        } else {
            singleDigitSum += num;
        }
    }


    return !(singleDigitSum === doubleDigitSum)
};