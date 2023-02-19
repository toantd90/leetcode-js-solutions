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
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  if (!root) return [];
  let queue = [root];
  let nodes = [];
  let isReversed = false;

  while (queue.length) {
    const size = queue.length;
    let currentLevel = [];

    for (let i = 0; i < size; i++) {
      const node = queue[i];
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (isReversed) {
      currentLevel.reverse();
    }

    isReversed = !isReversed;
    nodes.push([...currentLevel]);
    queue.splice(0, size);
  }

  return nodes;
}
