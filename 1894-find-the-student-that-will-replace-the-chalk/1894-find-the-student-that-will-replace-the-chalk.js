/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
function chalkReplacer(chalk, k) {
  const n = chalk.length;

  let sum = chalk.reduce((accumulate, current) => {
    return accumulate + current;
  }, 0);

  let remain = k % sum;

  for (let i = 0; i < n; i++) {
    if (remain < chalk[i]) {
      return i;
    }
    remain -= chalk[i];
  }
}
