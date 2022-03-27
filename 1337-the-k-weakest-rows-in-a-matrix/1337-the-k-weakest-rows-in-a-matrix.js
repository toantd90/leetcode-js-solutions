/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
    const m = mat.length, n = mat[0].length
    let rows = []
    
    for (let i = 0; i < m; i++) {
        const firstCivilianIndex = mat[i].indexOf(0)
        const numOfSoldiers = firstCivilianIndex === -1 ? n : firstCivilianIndex
        rows.push([i, numOfSoldiers])
    }
    
    rows.sort((r1, r2) => {
        if (r1[1] > r2[1]) return 1
        if (r1[1] < r2[1]) return -1
        return r1[0] - r2[0]
    })
    
    return rows.slice(0, k).map(row => row[0])
};