/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  let area = Number.POSITIVE_INFINITY
    
  let seen = new Set()
  
  for (let [x1, y1] of points) {
    for (let p of seen) {
      const [x2, y2]  = p.split('-')
      if (seen.has(x1 + '-' + y2) && seen.has(x2 + '-' + y1)) {
        area = Math.min(area, Math.abs(x1 - x2) * Math.abs(y1 - y2))
      }
    }
    
    seen.add(x1 + '-' + y1)
  }
  
  return area === Number.POSITIVE_INFINITY ? 0 : area
};
