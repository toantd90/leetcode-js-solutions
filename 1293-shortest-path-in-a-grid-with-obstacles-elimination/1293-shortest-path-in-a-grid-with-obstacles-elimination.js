/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
const shortestPath = (grid, k) => {
    const m = grid.length, n = grid[0].length
    const dirs = [0, 1, 0, -1, 0]
    
    if (k >= m + n - 2) return m + n - 2
    
    let queue = [[0, 0, k]]
    let visited = new Array(m).fill().map(_ => new Array(n).fill().map(_ => new Array(k).fill(false)))
    visited[0][0][k] = true
    let steps = 0
    
    const isInRange = (r, c) => r >= 0 && r < m && c >= 0 && c < n
    
    while (queue.length) {
        const size = queue.length
        
        for (let i = 0; i < size; i++) {
            const [r, c, k] = queue.shift()
            
            if (r === m - 1 && c === n - 1) return steps
            
            for (let j = 0; j < 4; j++) {
                const newR = r + dirs[j]
                const newC = c + dirs[j + 1]

                if (!isInRange(newR, newC)) continue

                const newK = k - grid[r][c]
                
                if (newK >= 0 && !visited[newR][newC][newK]) {
                    visited[newR][newC][newK] = true
                    queue.push([newR, newC, newK])
                }
            }
        }

        steps++
    }
    
    return -1
};