/**
 * @param {number[][]} img
 * @return {number[][]}
 */
function imageSmoother(img) {
    const rows = img.length;
    const cols = img[0].length;
    const smoothImg = new Array(rows).fill().map(() => new Array(cols).fill());

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = img[i][j];
            let count = 1;
            if (i > 0) {
                sum += img[i - 1][j];
                count++;

                if (j > 0) {
                    sum += img[i - 1][j - 1];
                    count++;
                }

                if (j < cols - 1) {
                    sum += img[i - 1][j + 1];
                    count++;
                }
            }

            if (i < rows - 1) {
                sum += img[i + 1][j];
                count++;

                if (j > 0) {
                    sum += img[i + 1][j - 1];
                    count++;
                }

                if (j < cols - 1) {
                    sum += img[i + 1][j + 1];
                    count++;
                }
            }

            if (j > 0) {
                sum += img[i][j - 1];
                count++;
            }

            if (j < cols - 1) {
                sum += img[i][j + 1];
                count++;
            }

            smoothImg[i][j] = Math.floor(sum / count);
        }
    }

    return smoothImg;
};