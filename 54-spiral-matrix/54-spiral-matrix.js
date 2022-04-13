/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
    let minX = 0, maxX = matrix.length - 1, minY = 0, maxY = matrix[0].length - 1
    let ans = []
    
    while (minX <= maxX && minY <= maxY) {
        for (let i = minY; i <= maxY; i++) {
            ans.push(matrix[minX][i])
        }
        minX++
        if (minX > maxX) break
        
        for (let i = minX; i <= maxX; i++) {
            ans.push(matrix[i][maxY])
        }
        maxY--
        if (minY > maxY) break
        
        for (let i = maxY; i >= minY; i--) {
            ans.push(matrix[maxX][i])
        }
        maxX--
        
        for (let i = maxX; i >= minX; i--) {
            ans.push(matrix[i][minY])
        }
        minY++
    }
    
    return ans
};