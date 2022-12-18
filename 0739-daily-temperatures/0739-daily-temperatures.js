/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = [temperatures.length - 1];

  for (let i = temperatures.length - 2; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }

  return result;
}
