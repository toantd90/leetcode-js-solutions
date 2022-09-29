function dfs(node, visited, graph, parent) {
  if (visited[node]) {
    return true
  }
  
  visited[node] = true
  
  for (let neighbour of graph[node]) {
    if (neighbour !== parent && dfs(neighbour, visited, graph, node)) {
      return true
    }
  }
  
  return false
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
  const n = edges.length
  let graph = new Array(n + 1).fill().map(_ => new Array())

  for (let [start, end] of edges) {
    let visited = new Set()
    
    graph[start].push(end)
    graph[end].push(start)
    
    if (dfs(start, visited, graph)) {
      return [start, end]
    }
  }
};