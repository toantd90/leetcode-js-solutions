/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
function countPoints(points, queries) {
  let answer = [];

  for (let [x, y, r] of queries) {
    let numOfPoints = 0;
    for (let [x1, y1] of points) {
      const distance = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));

      if (distance <= r) {
        numOfPoints++;
      }
    }
    answer.push(numOfPoints);
  }

  return answer;
}
