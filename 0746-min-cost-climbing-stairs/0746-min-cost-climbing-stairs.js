/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    let minCost = new Array(cost.length + 1).fill(0);
    minCost[0] = cost[0];
    minCost[1] = cost[1];

    for (let i = 2; i < cost.length + 1; i++) {
        minCost[i] = Math.min(minCost[i - 1], minCost[i - 2]) + (cost[i] || 0);
    }

    return minCost[cost.length];
};