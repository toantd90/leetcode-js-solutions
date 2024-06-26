/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    let answer = new Array(n).fill(0);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const lastColderDay = stack.pop();
            answer[lastColderDay] = i - lastColderDay;
        }

        stack.push(i);
    }

    return answer;
};