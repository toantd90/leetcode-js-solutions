/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = grid => {
    const m = grid.length
    const n = grid[0].length
    let l = 0, r = n - 1
    let cnt = 0
    
    for (let i = 0; i < m; i++) {
        let tempR = r
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            
            if (grid[i][mid] < 0 && (!grid[i][mid - 1] || grid[i][mid - 1] > 0)) {
                r = mid - 1
                cnt += n - mid
                break
            } else if (grid[i][mid] < 0) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        
        
        r = tempR
        l = 0
        cnt += n - r - 1
    }
    
    return cnt
};