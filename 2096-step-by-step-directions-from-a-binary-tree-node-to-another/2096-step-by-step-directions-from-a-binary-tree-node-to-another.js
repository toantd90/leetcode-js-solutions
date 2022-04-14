const dfs = (node, parentNode, graph) => {
  const val = node.val;
  graph[val] = {};

  if (parentNode) {
    graph[val][parentNode.val] = 'U';
  }

  if (node.left) {
    graph[val][node.left.val] = 'L';
    dfs(node.left, node, graph);
  }

  if (node.right) {
    graph[val][node.right.val] = 'R';
    dfs(node.right, node, graph);
  }

  return graph;
};

const bfs = (s, graph) => {
  const n = graph.length;
  let visited = new Array(n).fill(false);
  let path = new Array(n).fill(-1);

  let queue = [s];
  visited[s] = true;

  while (queue.length) {
    const node = queue.shift();
    const neighbors = Object.keys(graph[node]);

    for (let neighbor of neighbors) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
        path[neighbor] = node;
      }
    }
  }

  return path;
};

const printPath = (graph, path, start, finish, result) => {
  if (start === finish) {
    return result;
  } else {
    if (path[finish] === -1) {
      return '';
    } else {
      return printPath(graph, path, start, path[finish], graph[path[finish]][finish] + result);
    }
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
const getDirections = (root, startValue, destValue) => {
  let graph = [];

  // build graph
  dfs(root, null, graph);

  const path = bfs(startValue, graph);

  let res = printPath(graph, path, startValue, destValue, '');

  return res;
};
