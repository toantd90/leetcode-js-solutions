/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
  const parentsMap = findParent(root);

  let queue = [target];
  let steps = 0;
  let ans = [];
  let seen = new Set();

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue[i];
      if (seen.has(node.val)) continue;

      if (steps == k) {
        ans.push(node.val);
        continue;
      }

      seen.add(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (parentsMap[node.val]) queue.push(parentsMap[node.val]);
    }

    queue.splice(0, size);

    steps++;
  }

  return ans;
}

function dfs(node, parents) {
  if (node.left) {
    parents[node.left.val] = node;
    dfs(node.left, parents);
  }

  if (node.right) {
    parents[node.right.val] = node;
    dfs(node.right, parents);
  }
}

function findParent(node) {
  let parents = {};

  dfs(node, parents);

  return parents;
}
