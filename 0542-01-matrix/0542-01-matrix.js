/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    const directions = [0, 1, 0, -1, 0];
    const isInGrid = (x, y) => x >= 0 && x < m && y >= 0 && y < n;

    let queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j]) {
                mat[i][j] = -1;
            } else {
                queue.push([i, j]);
            }
        }
    }

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue[i];

            for (let j = 0; j < 4; j++) {
                const addX = directions[j];
                const addY = directions[j + 1];

                const newX = x + addX;
                const newY = y + addY;

                if (isInGrid(newX, newY) && mat[newX][newY] === -1) {
                    mat[newX][newY] = mat[x][y] + 1;
                    queue.push([newX, newY])
                }

            }
        }

        queue.splice(0, size);
    }

    return mat;
};
