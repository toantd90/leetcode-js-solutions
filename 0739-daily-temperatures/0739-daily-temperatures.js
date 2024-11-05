/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    let stack = [];
    let nextGreater = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack.slice(-1)] < temperatures[i]) {
            const day = stack.pop();
            nextGreater[day] = i - day;
        }

        stack.push(i);
    }

    return nextGreater;
};