import tree from "../Tree.js";
// Left => Right => Root
function postorder(node) {
  if (node !== null) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.data);
  }
}
const node = tree.root;
console.log(postorder(node));
