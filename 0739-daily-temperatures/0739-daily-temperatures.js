/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    let answer = new Array(n).fill(0);
    let stack = [n - 1]

    for (let i = n - 2; i >= 0; i--) {
        while (temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) {
            answer[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return answer;
};