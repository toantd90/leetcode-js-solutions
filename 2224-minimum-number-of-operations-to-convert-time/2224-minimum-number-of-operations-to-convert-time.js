const toMin = time => {
    const [hour, minute] = time.split(':').map(Number)
    
    return hour * 60 + minute
}

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = (current, correct) => {
    const diff = toMin(correct) - toMin(current)
    
    return Math.floor(diff / 60) + Math.floor(diff % 60 / 15) + Math.floor(diff % 15 / 5) + diff % 5
};