/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    let area = new Array(5 * 1e4).fill(1)
    let worklog = []
    
    for (let [start, end] of paint) {
        let paintedArea = 0
        for (let i = start; i < end; i++) {
            paintedArea += area[i] 
            area[i] = 0
        }
        worklog.push(paintedArea)
    }
    
    return worklog
};