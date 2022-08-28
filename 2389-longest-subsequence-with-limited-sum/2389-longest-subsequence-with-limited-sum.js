/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
function answerQueries(nums, queries) {
  nums.sort((n1, n2) => n1 - n2);

  let answers = [];

  for (let i = 0; i < queries.length; i++) {
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];

      if (sum > queries[i]) {
        answers.push(j);
        break;
      }

      if (j == nums.length - 1) {
        answers.push(j + 1);
        break;
      }
    }
  }

  return answers;
}
