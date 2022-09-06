/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function postOrderTraverse(node) {
  if (node.val == 0 && !node.left && !node.right) {
    node.val = -1;
    return;
  }

  if (node.left) {
    postOrderTraverse(node.left);
  }

  if (node.right) {
    postOrderTraverse(node.right);
  }

  if (
    node.val == 0 &&
    (!node.left || node.left.val == -1) &&
    (!node.right || node.right.val == -1)
  ) {
    node.val = -1;
  }
}

function rebuildTree(node) {
  if (node.val == -1) {
    node.left = null;
    node.right = null;

    return;
  }

  if (node.left) {
    if (node.left.val == -1) {
      node.left = null;
    } else {
      rebuildTree(node.left);
    }
  }

  if (node.right) {
    if (node.right.val == -1) {
      node.right = null;
    } else {
      rebuildTree(node.right);
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function pruneTree(root) {
  if (!root) return null
  
  postOrderTraverse(root);
  
  if (root.val == -1) return null

  rebuildTree(root);

  return root;
}
