/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = arr => {
    arr.sort((n1, n2) => n1 - n2)
    let min = arr[1] - arr[0]
    let res = [[arr[0], arr[1]]]
    
    for (let i = 2; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1]
        if (diff < min) {
            min = diff
            res = [[arr[i - 1], arr[i]]]
            continue
        }
        
        if (diff === min) {
            res.push([arr[i - 1], arr[i]])
        }
    }

    return res
};