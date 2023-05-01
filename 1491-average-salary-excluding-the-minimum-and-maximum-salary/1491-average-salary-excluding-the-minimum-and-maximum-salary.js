/**
 * @param {number[]} salary
 * @return {number}
 */
function average(salaries) {
  let sumOfSalary = 0;
  let min = 1e6 + 1;
  let max = 999;

  for (let salary of salaries) {
    sumOfSalary += salary;
    min = Math.min(min, salary);
    max = Math.max(max, salary);
  }

  return (sumOfSalary - min - max) / (salaries.length - 2);
}
