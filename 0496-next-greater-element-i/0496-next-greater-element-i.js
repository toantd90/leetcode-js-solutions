/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let nextGreater = new Map();

    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            nextGreater.set(stack.pop(), num);
        }

        stack.push(num);
    }

    let res = [];
    for (let num of nums1) {
        res.push(nextGreater.get(num) || -1);
    }

    return res;
};