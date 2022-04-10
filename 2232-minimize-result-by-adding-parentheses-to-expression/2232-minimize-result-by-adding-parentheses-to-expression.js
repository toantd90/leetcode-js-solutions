/**
 * @param {string} expression
 * @return {string}
 */
const minimizeResult = (expression) => {
  const [first, second] = expression.split('+');
  let res = Number(first) + Number(second);
  let ans = '(' + first + '+' + second + ')';

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      const x = Number(first.substring(0, i + 1));
      const a = Number(first.substring(i + 1));
      const b = Number(second.substring(0, j + 1));
      const y = Number(second.substring(j + 1));

      let cur;
      if (a === 0) {
        cur = (x + b) * (y || 1);
        if (cur < res) {
          res = cur;
          ans = '(' + x + '+' + b + ')' + (y !== 0 ? y : '');
        }
      } else {
        cur = x * (a + b) * (y || 1);
        if (cur < res) {
          res = cur;
          ans = x + '(' + a + '+' + b + ')' + (y !== 0 ? y : '');
        }
      }
    }
  }

  return ans;
};
