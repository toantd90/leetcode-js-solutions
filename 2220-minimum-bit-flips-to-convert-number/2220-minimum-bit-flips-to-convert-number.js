/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = (start, goal) => {
    let startBinary = start.toString(2)
    let goalBinary = goal.toString(2)
    if (startBinary.length > goalBinary.length) {
       const missed = '0'.repeat(startBinary.length - goalBinary.length)
       goalBinary = missed + goalBinary
    } else {
        const missed = '0'.repeat(goalBinary.length - startBinary.length)
        startBinary = missed + startBinary
    }
    let flip = 0
    for (let i = startBinary.length - 1; i >= 0; i--) {
        if (startBinary[i] !== goalBinary[i]) flip++
    }
    
    return flip
};