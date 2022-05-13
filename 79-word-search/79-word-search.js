/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    const rows = board.length
    const cols = board[0].length
    
    
    const dirs = [0, 1, 0, -1, 0]
    const isInBoard = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols
    
    const dfs = (curIndex, row, col) => {
        if (curIndex > word.length) return false
        if (curIndex === word.length - 1) return true
        const temp = board[row][col]
        board[row][col] = '#'
        
        let res = false
        
        for (let i = 0; i < 4; i++) {
            const newRow = row + dirs[i]
            const newCol = col + dirs[i + 1]
            
            
            if (isInBoard(newRow, newCol) && board[newRow][newCol] === word[curIndex + 1]) {
                res = res || dfs(curIndex + 1, newRow, newCol)
            }
        }
        
        board[row][col] = temp
        
        return res
    }
    
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === word[0])
                if (dfs(0, row, col)) return true
                
        }
    }
    
    
    return false
};