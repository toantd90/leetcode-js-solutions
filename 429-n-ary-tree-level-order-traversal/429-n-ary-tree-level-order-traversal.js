/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

function levelOrder(root) {
  if (!root) {
    return [];
  }
  let arr = [root];
  let result = [];

  while (arr.length) {
    const size = arr.length
    let curLevel = []
    
    for (let i = 0; i < size; i++) {
      if (arr[i]) {
        curLevel.push(arr[i].val)
        if (arr[i].children)
          arr.push(...arr[i].children)
      }
    }
    
    result.push(curLevel)
    arr.splice(0, size)
  }
  return result;
};
