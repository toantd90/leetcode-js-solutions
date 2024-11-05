/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    let stack = [];
    let nextGreater = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack.slice(-1)] < temperatures[i]) {
            nextGreater[stack.slice(-1)] = i - stack.pop();
        }

        stack.push(i);
    }

    return nextGreater;
};