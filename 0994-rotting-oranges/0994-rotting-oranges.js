function isInGrid(row, col, rows, cols) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let rottenOranges = [];
    let freshOrangeCount = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                rottenOranges.push([i, j]);
            }

            if (grid[i][j] === 1) {
                freshOrangeCount++;
            }
        }
    }

    if (freshOrangeCount == 0) return 0;

    const directions = [0, 1, 0, -1, 0];

    let minutes = 0;

    while (rottenOranges.length > 0 && freshOrangeCount > 0) {
        const size = rottenOranges.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = rottenOranges[i];

            for (let j = 0; j < 4; j++) {
                const nextX = x + directions[j];
                const nextY = y + directions[j + 1];

                if (isInGrid(nextX, nextY, m, n) && grid[nextX][nextY] == 1) {
                    grid[nextX][nextY] = 2;
                    rottenOranges.push([nextX, nextY]);
                    freshOrangeCount--;
                }
            }
        }

        rottenOranges.splice(0, size);
        minutes++;
    }

    return freshOrangeCount === 0 ? minutes : -1;
};