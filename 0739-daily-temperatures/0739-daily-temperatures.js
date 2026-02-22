/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length;
    const result = new Array(len).fill(0);
    const stack = [];

    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            result[topIndex] = i - topIndex;
        }

        stack.push(i);
    }

    return result;
};