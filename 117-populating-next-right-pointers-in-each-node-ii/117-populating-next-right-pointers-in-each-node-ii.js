/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  if (!root) return root

  let queue = [root]
  
  while (queue.length) {
      const size = queue.length
      let nextLevelNodes = []
      
      for (let i = 0; i < size; i++) {
          const node = queue.shift()
          node.next = queue[0] || null
          
          if (node.left) nextLevelNodes.push(node.left)
          if (node.right) nextLevelNodes.push(node.right)
      }
      
      queue = nextLevelNodes
  }

  return root;
};
