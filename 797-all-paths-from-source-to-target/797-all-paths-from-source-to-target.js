/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = graph => {
  let result = []
  
  const dfs = (node, paths) => {
    if (node === graph.length - 1) {
      result.push(paths.slice(0))
      return
    }
    for (const nextNode of graph[node]) {
      paths.push(nextNode)
      dfs(nextNode, paths)
      paths.pop()
    }
  }
  
  dfs(0, [0])
  
  return result
};