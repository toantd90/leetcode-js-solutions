/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = (firstList, secondList) => {
    if (!firstList.length || !secondList.length) return []
    
    let p1 = 0
    let p2 = 0
    let intersectionsList = []
    
    while (p1 < firstList.length && p2 < secondList.length) {
        const first = Math.max(firstList[p1][0], secondList[p2][0])
        const second = Math.min(firstList[p1][1], secondList[p2][1])
        if (first <= second)
            intersectionsList.push([first, second])
        if (firstList[p1][1] > secondList[p2][1])
            p2++
        else
            p1++
    }
    
    return intersectionsList
};