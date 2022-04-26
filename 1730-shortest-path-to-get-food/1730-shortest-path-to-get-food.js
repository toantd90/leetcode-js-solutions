/**
 * @param {character[][]} grid
 * @return {number}
 */
const getFood = grid => {
    const dirs = [0, 1, 0, -1, 0]
    
    const m = grid.length
    const n = grid[0].length
    
    let sr, sc
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "*") {
                sr = i
                sc = j
                break
            }
        }
        if (sr) break
    }
    
    let steps = 0
    let queue = [[sr, sc]]
    let visited = new Array(m).fill().map(_ => new Array(n).fill(false))
    visited[sr][sc] = true
    
    const isInRange = (r, c) => r >= 0 && r < m && c >= 0 && c < n
    
    
    while (queue.length) {
        const size = queue.length
        steps++
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift()
            
            for (let i = 0; i < 4; i++) {
                const nr = r + dirs[i]
                const nc = c + dirs[i + 1]
                
                if (isInRange(nr, nc) && !visited[nr][nc]) {
                    if (grid[nr][nc] === '#') {
                        return steps
                    }
                    if (grid[nr][nc] === 'X') {
                        continue
                    } else {
                        visited[nr][nc] = true
                        queue.push([nr, nc])
                    }
                }
                
            }
        }
    }
    
    return -1
};