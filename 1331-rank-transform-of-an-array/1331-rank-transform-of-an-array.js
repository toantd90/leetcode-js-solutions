/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = arr => {
    
    let sortedArr = [...arr].sort((n1, n2) => n1 - n2)
    
    let rank = { [sortedArr[0]]: 1 }
    
    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i - 1]) {
            rank[sortedArr[i]] = rank[sortedArr[i - 1]] + 1
        }
    }

    let res = []
    
    for (let num of arr) {
        res.push(rank[num])
    }

    return res
};