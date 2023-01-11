function dfs(node, paths, adjacencyList, hasApple, allPaths) {
  if (hasApple[node]) {
    for (let path of paths) {
      allPaths.add(path);
    }
  }
  for (let nextNode of adjacencyList[node]) {
    if (!paths.includes(nextNode)) {
      paths.push(nextNode);
      dfs(nextNode, paths, adjacencyList, hasApple, allPaths);
      paths.pop();
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
function minTime(n, edges, hasApple) {
  let allPaths = new Set();
  allPaths.add(0);
  let adjacencyList = new Array(n).fill().map((_) => new Array());

  for (let [start, end] of edges) {
    adjacencyList[start].push(end);
    adjacencyList[end].push(start);
  }

  dfs(0, [0], adjacencyList, hasApple, allPaths);

  return (allPaths.size - 1) * 2;
}
