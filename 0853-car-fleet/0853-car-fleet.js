/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  const numOfCar = position.length;
  let cars = [];
  for (let carIndex = 0; carIndex < numOfCar; carIndex++) {
    cars.push([
      position[carIndex],
      (target - position[carIndex]) / speed[carIndex],
    ]);
  }

  cars.sort(([position1], [position2]) => position1 - position2);

  let cur = 0;
  let carFleet = 0;
  for (let carIndex = numOfCar - 1; carIndex >= 0; carIndex--) {
    const [_, time] = cars[carIndex];
    if (time > cur) {
      cur = time;
      carFleet++;
    }
  }

  return carFleet;
}
