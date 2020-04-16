import tree from "../Tree.js";
// Root => Left => Right
function preorder(node) {
  if (node !== null) {
    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
  }
}
const node = tree.root;
console.log(preorder(node));
