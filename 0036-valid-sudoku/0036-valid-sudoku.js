/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Array(9).fill().map(_ => new Set());
    let cols = new Array(9).fill().map(_ => new Set());
    let boxes = new Array(9).fill().map(_ => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];
            if (cell === ".") continue;
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxIndex].has(cell)) {
                return false;
            }
            rows[i].add(cell);
            cols[j].add(cell);
            boxes[boxIndex].add(cell);
        }
    }

    return true;
};


// [2,2]
// [2,5]