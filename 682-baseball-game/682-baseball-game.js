/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = ops => {
    let points = []
    let sum = 0
    
    for (let op of ops) {
        const lastPointIndex = points.length - 1
        let newScore
        if (op === 'C') {
            sum -= points.pop()
            continue
        } else if (op === '+') {
            newScore = points[lastPointIndex] + points[lastPointIndex - 1]
        } else if (op === 'D') {
            newScore = points[lastPointIndex] * 2
        } else {
            newScore = Number(op)
        }
        
        points.push(newScore)
        sum += newScore
    }
    
    return sum
};