/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  const lastNode = graph.length - 1;
  let paths = [];

  function dfs(source, target, path, graph) {
    path.push(source);

    if (source == target) {
      paths.push([...path]);
      return;
    }

    for (const next of graph[source]) {
      if (!path.includes(next)) {
        dfs(next, target, path, graph);
      }
      
      path.pop();
    }
  }

  dfs(0, lastNode, [], graph);

  return paths;
}
