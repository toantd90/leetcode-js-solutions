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
 * @return {string}
 */
function tree2str(root) {
  if (!root) return '';
  let str = '';

  function preOrderTraverse(node) {
    if (!node) return;
    str += node.val;
    if (node.left) {
      str += '(';
      preOrderTraverse(node.left);
      str += ')';
    } else {
      if (node.right) {
        str += '()'
      }
    }
  
    if (node.right) {
      str += '(';
      preOrderTraverse(node.right);
      str += ')';
    }
  }

  preOrderTraverse(root);

  return str;
}
