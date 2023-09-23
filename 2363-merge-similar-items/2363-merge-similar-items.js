/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let outPut = {}
    items1.forEach((item) => {
        if(outPut[item[0]] == null){
            outPut[item[0]] = item[1]
        } else {
            outPut[item[0]] = outPut[item[0]] + item[1]
        }
    })
    items2.forEach((item) => {
        if(outPut[item[0]] == null){
            outPut[item[0]] = item[1]
        } else {
            outPut[item[0]] = outPut[item[0]] + item[1]
        }
    })
    let output2 = []
    Object.keys(outPut).forEach((key) => {
        output2.push([key, outPut[key]])
    })
    return output2
};