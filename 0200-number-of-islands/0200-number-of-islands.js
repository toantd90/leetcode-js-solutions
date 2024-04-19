function isInRange(x, y, m, n) {
    return x >= 0 && x < m && y >= 0 && y < n;
}

function dfs(grid, x, y, m, n) {
    const directions = [0, -1, 0, 1, 0];
    grid[x][y] = "0";

    for (let i = 0; i < directions.length - 1; i++) {
        const addX = directions[i];
        const addY = directions[i + 1];
        const newX = x + addX;
        const newY = y + addY;

        if (isInRange(newX, newY, m, n) && grid[newX][newY] === "1") {
            dfs(grid, newX, newY, m, n);
        }
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let islands = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                islands++;
                dfs(grid, i, j, m, n);
            }
        }
    }

    return islands;
};