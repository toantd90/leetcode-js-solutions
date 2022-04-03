/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = (current, correct) => {
    const [currentHour, currentMinute] = current.split(':').map(Number)
    const [correctHour, correctMinute] = correct.split(':').map(Number)
    
    
    let convert = correctHour - currentHour
    let diff = correctMinute < currentMinute ? correctMinute + 60 - currentMinute : correctMinute - currentMinute
    
    while (diff >= 5) {
        if (diff / 15 >= 1) {
            convert += Math.floor(diff / 15)
            diff %= 15
            continue
        }
        
        if (diff /= 5 >= 1) {
            convert += Math.floor(diff / 5)
            diff %= 5
        }
    }
    
    return convert += diff + (correctMinute < currentMinute ? -1 : 0)
};