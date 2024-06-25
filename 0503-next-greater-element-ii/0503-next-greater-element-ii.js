/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let nextGreater = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        while (stack.length && nums[stack[stack.length - 1]] < num) {
            nextGreater[stack.pop()] = num;
        }

        stack.push(i);
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        while (stack.length && nums[stack[stack.length - 1]] < num) {
            const last = stack.pop()
            if (nextGreater[last] === -1) {
                nextGreater[last] = num;
            }
        }

        stack.push(i);
    }

    return nextGreater;
};