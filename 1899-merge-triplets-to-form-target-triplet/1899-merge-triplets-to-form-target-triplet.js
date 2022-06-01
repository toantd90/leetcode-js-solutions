/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
const mergeTriplets = (triplets, target) => {
    let res = new Array(3).fill(0)
    for (let [first, second, third] of triplets) {
        if (first <= target[0] && second <= target[1] && third <= target[2]) {
            res = [Math.max(res[0], first), Math.max(res[1], second), Math.max(res[2], third)]
        }
    }
    
    return res[0] === target[0] && res[1] === target[1] && res[2] === target[2]
};