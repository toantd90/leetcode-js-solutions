/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = (poured, query_row, query_glass) => {
    if (poured === 0) return 0
    if (query_row === 0) return poured > 1 ? 1 : poured
    
    if (query_row === 1) {
        return Math.min((poured - 1) / 2, 1)
    }
    let currentRow = 2
    let previousRow = [poured]
    
    while (poured > 0) {
        let row = new Array(currentRow).fill(0)
        for (let i = 0; i < currentRow; i++) {
            if (previousRow[i - 1] > 1) {
                row[i] += (previousRow[i - 1] - 1) / 2
            }
            
            if (previousRow[i] > 1) {
                row[i] += (previousRow[i] - 1) / 2
            }
        }
        
        if (currentRow === query_row + 1) {
            return Math.min(row[query_glass], 1)
        }
        
        currentRow++
        previousRow = row
    }
    
    return 0
};