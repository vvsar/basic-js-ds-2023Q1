const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node
{
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor()
    {
      this.treeRoot = null;
    }

  root() {
    // throw new NotImplementedError('Not implemented');
    if (this.treeRoot === null) {
      return null;
    }
    return this.treeRoot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    const node = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = node;
      return;
    }
    let current = this.treeRoot;
    while (true) {
      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
      current = current.right;
      } else if (data < current.data) {
        if (!current.left) {
              current.left = node;
              break;
        }
        current = current.left;
      } else {
        break;
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    const node = new Node(data);
    let current = this.treeRoot;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    let current = this.treeRoot;
    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        break;
      }
    }
    return current;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.treeRoot = removeNode(this.treeRoot, data);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left && node.right) {
          node = node.right;
          return node;
        }
        if (!node.right && node.left) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    let current = this.treeRoot;
    if(!current) {
      return null;
    }
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    let current = this.treeRoot;
    if(!current) {
      return null;
    }
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};