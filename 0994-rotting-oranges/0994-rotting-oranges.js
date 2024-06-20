function isInGrid(x, y, rows, cols) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let rottenOranges = [];
    let freshOrangesNumber = 0;
    const directions = [0, -1, 0, 1, 0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                rottenOranges.push(`${i}-${j}`);
            }

            if (grid[i][j] === 1) {
                freshOrangesNumber++;
            }
        }
    }

    if (freshOrangesNumber === 0) return 0;

    let minutes = 0;

    while (rottenOranges.length > 0 && freshOrangesNumber > 0) {
        const size = rottenOranges.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = rottenOranges[i].split('-').map(Number);

            for (j = 0; j < 4; j++) {
                const addX = directions[j];
                const addY = directions[j + 1];

                const newX = x + addX;
                const newY = y + addY;

                if (isInGrid(newX, newY, m, n) && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    rottenOranges.push(`${newX}-${newY}`);
                    freshOrangesNumber--;
                }
            }

        }

        rottenOranges.splice(0, size);
        minutes++;
    }

    return freshOrangesNumber > 0 ? -1 : minutes;
};