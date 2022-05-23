/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
    const lastDay = days[days.length - 1]
    let dp = new Array(lastDay + 1).fill(0)
    let currentDay = 0
    
    for (let day = 1; day <= lastDay; day++) {
        if (day < days[currentDay]) {
            dp[day] = dp[day - 1]
        } else {
            dp[day] = Math.min(dp[day - 1] + costs[0], (dp[day - 7] || 0) + costs[1], (dp[day - 30] || 0) + costs[2])
            currentDay++
        }
        
        
    }
    
    
    return dp[lastDay]
};