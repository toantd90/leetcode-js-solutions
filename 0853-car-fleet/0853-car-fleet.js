/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const n = position.length;
    let cars = []
    for (let i = 0; i < n; i++) {
        cars.push([position[i], (target - position[i]) / speed[i]])
    }

    cars.sort((c1, c2) => c1[0] - c2[0]);

    let fleet = 1;
    let time = cars[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (cars[i][1] > cars[i + 1][1]) {
            fleet++;
        }
    }

    return fleet;
};