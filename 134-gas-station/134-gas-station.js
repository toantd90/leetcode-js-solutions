/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    const n = gas.length
    let start = 0
    let totalDiff = 0
    let curDiff = 0
    
    
    for (let i = 0; i < n; i++) {
        totalDiff += gas[i] - cost[i]
        curDiff += gas[i] - cost[i]
        
        if (curDiff < 0) {
            curDiff = 0
            start = i + 1
        }
    }

    return totalDiff < 0 ? -1 : start
};