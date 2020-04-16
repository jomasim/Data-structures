import tree from "../Tree.js";
// Left => Root => Right
function inorder(node) {
  if (node !== null) {
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
  }
}
const node = tree.root;
console.log(inorder(node));
