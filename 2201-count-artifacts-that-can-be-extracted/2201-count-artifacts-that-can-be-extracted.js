const canBeExtracted = (grid, artifact) => {
    const [r1, c1, r2, c2] = artifact
    
    for (let r = r1; r <= r2; r++) {
        for (let c = c1; c <= c2; c++) {
            if (!grid[r][c]) return false
        }
    }
    
    return true
}


/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
const digArtifacts = (n, artifacts, dig) => {
    let grid = new Array(n).fill().map(_ => new Array(n).fill(0))
    
    for (let [r, c] of dig) {
        grid[r][c] = 1
    }
    
    let res = 0

    for (let artifact of artifacts) {
        if (canBeExtracted(grid, artifact)) res++
    }
    
    return res
};