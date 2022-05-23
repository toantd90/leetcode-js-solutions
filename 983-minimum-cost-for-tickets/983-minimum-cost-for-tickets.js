/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
    const lastDay = days[days.length - 1]
    let dp = new Array(lastDay + 1).fill(0)
    
    for (let i = 0; i < days.length; i++) {
        const currentDay = days[i]
        for (let j = days[i - 1]; j < currentDay; j++) {
            dp[j] = dp[days[i - 1]]
        }
        
        dp[currentDay] = Math.min(dp[currentDay - 1] + costs[0], (dp[currentDay - 7] || 0) + costs[1], (dp[currentDay - 30] || 0) + costs[2])
    }
    
    
    return dp[lastDay]
};