class Point {
  constructor([x, y]) {
    this.x = x;
    this.y = y;
    this.distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function kClosest(points, k) {
  let kClosestHeap = new MaxPriorityQueue({
    priority: ({ x, y, distance }) => distance,
  });
  for (let i = 0; i < k; i++) {
    kClosestHeap.enqueue(new Point(points[i]));
  }

  for (let i = k; i < points.length; i++) {
    const newPoint = new Point(points[i]);

    if (kClosestHeap.front().element.distance > newPoint.distance) {
      kClosestHeap.dequeue();
      kClosestHeap.enqueue(newPoint);
    }
  }

  return kClosestHeap.toArray().map(({ element }) => [element.x, element.y]);
}
