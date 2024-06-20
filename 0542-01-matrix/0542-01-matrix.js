/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = mat => {
    const m = mat.length
    const n = mat[0].length
    
    const isInRange = (r, c) => r >= 0 && r < m && c >= 0 && c < n
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    let queue = []
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!mat[i][j]) queue.push([i , j])
            else mat[i][j] = -1
        }
    }
    
    while (queue.length) {
        const [r, c] = queue.shift()
        
        for (let [addR, addC] of directions) {
            const desR = r + addR
            const desC = c + addC
            
            if (isInRange(desR, desC) && mat[desR][desC] === -1) {
                mat[desR][desC] = mat[r][c] + 1
                queue.push([desR, desC])
            }
        }
    }
    
    return mat
};