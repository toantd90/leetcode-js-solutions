/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
    costs.sort((c1, c2) => (c2[0] - c2[1]) - (c1[0] - c1[1]))  
    let l = 0
    let r = costs.length - 1
    let minCost = 0
    
    while (l < r) {
        minCost += costs[l][1] + costs[r][0]
        l++
        r--
    }
    
    return minCost
};