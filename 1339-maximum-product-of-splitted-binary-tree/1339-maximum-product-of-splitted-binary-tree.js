/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function postorderTraverse(node) {
  let sumVal = node.val;

  if (node.left) {
    postorderTraverse(node.left);
    sumVal += node.left.sumVal;
  }

  if (node.right) {
    postorderTraverse(node.right);
    sumVal += node.right.sumVal;
  }

  node.sumVal = sumVal;
}

function dfs(node, totalSum) {
  if (!node) {
    return 0;
  }

  return Math.max(
    dfs(node.left, totalSum),
    dfs(node.right, totalSum),
    node.sumVal * (totalSum - node.sumVal)
  );
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxProduct(root) {
  postorderTraverse(root);

  return dfs(root, root.sumVal) % (1e9 + 7);
}
