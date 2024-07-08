/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const uniqueSet = new Set(nums);
    let longest = 0;
    const uniqueNums = Array.from(uniqueSet);

    for (let num of uniqueNums) {
        if (uniqueSet.has(num - 1)) {
            continue;
        }

        let tempNum = num;
        while (uniqueSet.has(tempNum)) {
            tempNum++;
        }

        longest = Math.max(longest, tempNum - num);
    }

    return longest;
};