/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = arr => {
    let dp = []
    let stack = [-1]
    let result = 0
    const MOD = 1e9 + 7
    
    for (let i = 0; i < arr.length; i++) {
        while (stack[stack.length - 1] !== -1 && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop()
        }
        const j = stack[stack.length - 1]
        
        dp[i] = (dp[j] || 0) + arr[i] * (i - j)
        result += dp[i]
        stack.push(i)
    }
    
    return result % MOD
};