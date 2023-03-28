/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
  const n = days.length;
  const lastDay = days[n - 1];
  let dp = new Array(lastDay + 1).fill(0);
  let dayIndex = 0;

  for (let i = 1; i <= lastDay; i++) {
    while (i < days[dayIndex]) {
      dp[i] = dp[i - 1];
      i++;
    }

    dp[i] = Math.min(
      dp[i - 1] + costs[0],
      (dp[i - 7] || 0) + costs[1],
      (dp[i - 30] || 0) + costs[2]
    );
    dayIndex++;
  }
  return dp[lastDay];
}
