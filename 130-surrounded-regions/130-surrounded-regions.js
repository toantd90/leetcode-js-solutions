/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const addRow = (row, board, queue) => {
    for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] === 'O')
            queue.push([row, col])
    }
}

const addCol = (col, board, queue) => {
    for (let row = 1; row < board.length - 1; row++) {
        if (board[row][col] === 'O')
            queue.push([row, col])
    }
}


const solve = board => {
    const m = board.length
    const n = board[0].length
    
    let queue = []
    addRow(0, board, queue)
    addRow(m - 1, board, queue)
    addCol(0, board, queue)
    addCol(n - 1, board, queue)
    
    let visited = new Array(m).fill().map(_ => new Array(n).fill(false))
    
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const isInRange = (x, y) => x >= 0 && x < m && y >= 0 && y < n
    
    for (const [x, y] of queue) {
        board[x][y] = '-'
        visited[x][y] = true
    }
    
    while (queue.length) {
        const size = queue.length
        
        for (let i = 0; i < queue.length; i++) {
            const [x, y] = queue.shift()
            if (visited)
            
            for (const [addX, addY] of directions) {
                const newX = x + addX
                const newY = y + addY
                
                if (isInRange(newX, newY) && !visited[newX][newY] && board[newX][newY] === 'O') {
                    visited[newX][newY] = true
                    board[newX][newY] = '-'
                    queue.push([newX, newY])
                }
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] === 'O' ? board[i][j] = 'X' : board[i][j] === '-' ? board[i][j] = 'O' : board[i][j] = 'X'
        }
    }
    
    return board
}; 