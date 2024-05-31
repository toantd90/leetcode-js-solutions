/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    let stack = [n - 1];
    let result = new Array(n).fill(0);


    for (let i = temperatures.length - 2; i >= 0; i--) {
        while (temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return result;
};