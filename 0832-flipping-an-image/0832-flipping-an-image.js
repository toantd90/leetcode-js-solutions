/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    const n = image.length;

    let modifiedImage = [];

    for (let row of image) {
        modifiedImage.push(row.reverse().map(p => {
            if (p === 0) {
                return 1;
            } else {
                return 0;
            }
        }))
    }

    return modifiedImage;
};