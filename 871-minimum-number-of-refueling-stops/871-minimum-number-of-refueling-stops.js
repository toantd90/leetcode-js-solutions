/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
function minRefuelStops(target, startFuel, stations) {
  if (startFuel >= target) return 0
  
  let queue = new MaxPriorityQueue()
  let i = 0
  let stops = 0
  let maxDistance = startFuel
  const n = stations.length
  
  while (maxDistance < target) {
    while (i < n && stations[i][0] <= maxDistance) {
      queue.enqueue(stations[i][1])
      i++
    }
    if (queue.isEmpty()) return -1
    
    maxDistance += queue.dequeue().element
    stops++
  }
  
  return stops
};