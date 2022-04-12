const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

const isInRange = (x, y, m, n) => x >= 0 && x < m && y >= 0 && y < n

const countLiveNeighbors = (board, x, y, m, n) => {
    let liveNeighbors = 0
    for (let [addX, addY] of neighbors) {
        const nextX = x + addX
        const nextY = y + addY
        
        if (isInRange(nextX, nextY, m, n) && board[nextX][nextY]) {
            liveNeighbors++
        }
            
    }
    
    return liveNeighbors
}
 
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = board => {
    const m = board.length
    const n = board[0].length
    const tempBoard = JSON.parse(JSON.stringify(board))
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighbors = countLiveNeighbors(tempBoard, i, j, m, n)
            
            if (!tempBoard[i][j]) {
                if (liveNeighbors === 3) {
                    board[i][j] = 1
                }
            } else {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 0
                }
            }
        }
    }
    
};