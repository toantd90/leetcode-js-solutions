/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
const brokenCalc = (startValue, target) => {
    let step = 0, cur = target
    
    while (cur > startValue) {
        if (cur % 2 === 0) {
            cur /= 2
        } else {
            cur++
        }
        step++
    }
    step += startValue - cur
    
    return step
};