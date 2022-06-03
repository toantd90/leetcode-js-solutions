/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const minKnightMoves = (x, y) => {
    if (x === 0 && y === 0) return 0
    const dirs = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
    
    let queue = [[0, 0]]
    let visited = new Set()
    visited.add('0,0')
    let steps = 0
    
    while (queue.length) {
        const size = queue.length
        steps++
        
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()
            
            for (let [addRow, addCol] of dirs) {
                const nextRow = row + addRow
                const nextCol = col + addCol
                
                if (nextRow === x && nextCol === y) return steps
                
                if (!visited.has(`${nextRow},${nextCol}`)) {
                    queue.push([nextRow, nextCol])
                    visited.add(`${nextRow},${nextCol}`)
                }
            }    
        }
        
    }
};