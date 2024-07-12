/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let warmerTemperatures = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        const temperature = temperatures[i];
        while (stack.length && temperatures[stack[stack.length - 1]] < temperature) {
            const day = stack.pop();
            warmerTemperatures[day] = i - day;
        }

        stack.push(i);
    }

    return warmerTemperatures;
};