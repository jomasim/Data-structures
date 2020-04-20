import tree from "../Tree.js";
// level order uses queue to traverse all the nodes.

function levelOrder(root) {
  let results = [];
  if (root === null) {
    return results;
  }
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let row = [];
    let rowSize = queue.length;
    while (rowSize > 0) {
      let currentNode = queue.shift();
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      row.push(currentNode.data);
      rowSize--;
    }
    results.push(row);
  }
  return results;
}
console.log(levelOrder(tree.root));
