/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
function postorder(node, values = []) {
  if (!node) return values;
  for (let child of node.children) {
    postorder(child, values);
  }
  values.push(node.val);

  return values;
}
