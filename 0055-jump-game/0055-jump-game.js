/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length < 2) {
        return true;
    }

    let currentPosition = [0];
    let visited = new Set();
    visited.add(0);

    while (currentPosition.length > 0) {
        const len = currentPosition.length;
        for (let i = 0; i < len; i++) {
            for (let j = 1; j <= nums[currentPosition[i]]; j++) {
                const nextPosition = currentPosition[i] + j;

                if (nextPosition === nums.length - 1) {
                    return true;
                } else if (nextPosition < nums.length - 1) {
                    if (!visited.has(nextPosition)) {
                        visited.add(nextPosition);
                        currentPosition.push(nextPosition);
                    }
                } else {
                    //
                }
            }
        }

        currentPosition = currentPosition.slice(len);
    }

    return false;
};