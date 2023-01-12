function postOrderTraverse(node, labels, adjacencyList, ans, visited) {
  let count = { [labels[node]]: 1 };
  visited[node] = true;
  for (let nextNode of adjacencyList[node]) {
    if (!visited[nextNode]) {
      let currentCount = postOrderTraverse(
        nextNode,
        labels,
        adjacencyList,
        ans,
        visited
      );

      for (let [label, cnt] of Object.entries(currentCount)) {
        count[label] = (count[label] || 0) + cnt;
      }
    }
  }

  ans[node] = count[labels[node]];

  return count;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
function countSubTrees(n, edges, labels) {
  let adjacencyList = new Array(n).fill().map((_) => new Array());

  for (let [start, end] of edges) {
    adjacencyList[start].push(end);
    adjacencyList[end].push(start);
  }

  let ans = new Array(n).fill(0);
  let visited = new Array(n).fill(false);

  const count = postOrderTraverse(0, labels, adjacencyList, ans, visited);
  ans[0] = count[labels[0]];
  return ans;
}
