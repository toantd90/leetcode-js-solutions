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
 * @return {number}
 */
function maxLevelSum(root) {
  let queue = [root];
  let maxSum = [0, -Infinity];
  let level = 0;

  while (queue.length) {
    const size = queue.length;

    let sum = 0;
    for (let i = 0; i < size; i++) {
      const node = queue[i];
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    level++;
    if (maxSum[1] < sum) {
      maxSum = [level, sum];
    }
    queue.splice(0, size);
  }

  return maxSum[0];
}
