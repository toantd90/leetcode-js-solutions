/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function dfs(node, max, min) {
  if (!node) {
    return 0;
  }

  if (node.val > max) {
    max = node.val;
  }

  if (node.val < min) {
    min = node.val;
  }

  return Math.max(
    max - min,
    dfs(node.left, max, min),
    dfs(node.right, max, min)
  );
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
  return dfs(root, root.val, root.val);
}
