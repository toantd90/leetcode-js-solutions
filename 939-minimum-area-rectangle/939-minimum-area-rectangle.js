/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  let area = Number.POSITIVE_INFINITY
  let pointMap = {}  
  
  for (let [x, y] of points) {
    if (!pointMap[x]) pointMap[x] = new Set()
    
    pointMap[x].add(y)
  }
  
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j]
      if (x1 === x2 || y1 === y2) continue
      
      if (pointMap[x1].has(y2) && pointMap[x2].has(y1)) {
        area = Math.min(area, Math.abs(x1 - x2) * Math.abs(y1 - y2))
      }
    }
  }
  
  return area === Number.POSITIVE_INFINITY ? 0 : area
};
