function pointCompare(point1, point2) {
  const [start1, end1] = point1;
  const [start2, end2] = point2;

  if (start1 > start2) {
    return 1;
  } else if (start1 < start2) {
    return -1;
  } else if (end1 > end2) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  points.sort(pointCompare);
  let numOfArrows = 1;
  let arrowRange = points[0];

  for (let i = 1; i < points.length; i++) {
    const [arrowStart, arrowEnd] = arrowRange;
    const [start, end] = points[i];

    const currentStart = Math.max(arrowStart, start);
    const currentEnd = Math.min(arrowEnd, end);

    if (currentStart > currentEnd) {
      numOfArrows++;
      arrowRange = points[i];
    } else {
      arrowRange = [currentStart, currentEnd];
    }
  }

  return numOfArrows;
}
