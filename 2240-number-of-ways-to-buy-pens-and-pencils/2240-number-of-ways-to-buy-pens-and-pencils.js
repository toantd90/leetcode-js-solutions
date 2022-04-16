/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
const waysToBuyPensPencils = (total, cost1, cost2) => {
    let remain = total
    let ways = 0
    
    while (remain >= 0) {
        ways += Math.floor(remain / cost2) + 1
        remain -= cost1
    }
    
    return ways
};