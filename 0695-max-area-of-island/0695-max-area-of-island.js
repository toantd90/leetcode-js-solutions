function isInGrid(rows, cols, row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
}

const directions = [0, 1, 0, -1, 0]

function dfs(grid, row, col, visited, area) {
    visited.add(`${row}-${col}`);
    grid[row][col] = 0;
    area++;
    for (let i = 0; i < 4; i++) {
        const nextRow = row + directions[i];
        const nextCol = col + directions[i + 1];
        if (isInGrid(grid.length, grid[0].length, nextRow, nextCol) && grid[nextRow][nextCol] === 1) {
            area += dfs(grid, nextRow, nextCol, visited, 0);
        }
    }

    return area;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    let maxArea = 0;

    const rows = grid.length;
    const cols = grid[0].length;

    let oneCells = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                oneCells.push([row, col]);
            }
        }
    }

    let visited = new Set();
    for (let [row, col] of oneCells) {
        if (visited.has(`${row}-${col}`)) continue;

        currentArea = dfs(grid, row, col, visited, 0);
        maxArea = Math.max(maxArea, currentArea);
    }

    return maxArea;
};