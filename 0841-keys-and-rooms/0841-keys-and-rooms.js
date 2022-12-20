function dfs(key, visited, rooms) {
  const roomKeys = rooms[key];
  visited[key] = true
      
  for (let roomKey of roomKeys) {
    if (!visited[roomKey]) {
      dfs(roomKey, visited, rooms)
    }
  }
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  const numOfRooms = rooms.length
  
  let visited = new Array(numOfRooms).fill(false);
  
  
  dfs(0, visited, rooms)
  
  return visited.every(room => !!room)
};