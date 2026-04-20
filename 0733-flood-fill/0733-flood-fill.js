/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
    if (image[sr][sc] === color) {
        return image;
    }

    const rows = image.length;
    const cols = image[0].length;

    let queue = [[sr, sc]];
    const dirs = [0, 1, 0, -1, 0];
    const originalColor = image[sr][sc];

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue[i];
            image[x][y] = color;
            for (let j = 0; j < dirs.length - 1; j++) {
                const nextX = x + dirs[j];
                const nextY = y + dirs[j + 1];

                if (
                    nextX >= 0 &&
                    nextX < rows &&
                    nextY >= 0 &&
                    nextY < cols &&
                    image[nextX][nextY] === originalColor
                ) {
                    image[nextX][nextY] = color;
                    queue.push([nextX, nextY]);
                }
            }
        }
        queue = queue.slice(size);
    }

    image[sr][sc] = color;

    return image;
}
