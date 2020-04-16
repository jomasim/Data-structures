class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // remove
  remove(val) {
    this.root = this.removeNode(this.root, val);
  }

  removeNode(node, val) {
    if (node === null) {
      return null;
    } else if (val < node.data) {
      // if val is less than the node data then we left
      node.left = this.removeNode(node.left, val);
      return node;
    } else if (val > node.data) {
      // if val is greater than the node data then right
      node.right = this.removeNode(node.right, val);
      return node;
    }
    //else we found the node and we are rady to delete it
    else {
      // if the node has no child
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // if the node has one child
      else if (node.right === null) {
        node = node.left;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      }
      // else if the node has two children then find the min node from the right side;
      const minNode = this.findMinNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  // find min node
  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }
}

const tree = new Tree();
tree.insert(20);
tree.insert(18);
tree.insert(24);

export default tree;

console.log("original tree", tree);
tree.remove(24);
console.log("final tree", tree);
