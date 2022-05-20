/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = (n, connections) => {
  let edges = {},
    visited = {},
    time = 0,
    minTime = [],
    originalTime = [],
    ans = [];
  for (let i = 0; i < connections.length; i++) {
    let a = connections[i][0];
    let b = connections[i][1];
    if (edges[a] === undefined) {
      edges[a] = [];
    }
    edges[a].push(b);
    if (edges[b] === undefined) {
      edges[b] = [];
    }
    edges[b].push(a);
  }
  dfs(0, null);
  return ans;
  function dfs(node, parent) {
    time++;
    visited[node] = true;
    minTime[node] = originalTime[node] = time;
    if (edges[node] !== undefined) {
      for (let i = 0; i < edges[node].length; i++) {
        let neighbour = edges[node][i];
        if (visited[neighbour] === undefined) {
          dfs(neighbour, node);
          if (originalTime[node] < minTime[neighbour]) {
            //this edges is critical as there is no other way to reach this neighbour
            ans.push([node, neighbour]);
          } else {
            minTime[node] = Math.min(minTime[node], minTime[neighbour]);
          }
        } else if (neighbour !== parent) {
          //We need to consider other parent nodes execpt the curretn parent
          minTime[node] = Math.min(minTime[node], minTime[neighbour]);
        }
      }
    }
  }
};
