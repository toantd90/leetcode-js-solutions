/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    let longest = 0;

    let numSet = new Set(nums);

    for (let num of numSet) {
        if (numSet.has(num + 1)) {
            continue;
        }

        let cur = num;
        while (numSet.has(cur - 1)) {
            cur = cur - 1;
        }

        longest = Math.max(longest, num - cur + 1);
    }

    return longest;
};