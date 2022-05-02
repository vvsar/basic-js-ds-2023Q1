const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.root.data;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    this.root = addWithin(this.root, data);
    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return searchWithin(this.root, data);
    function searchWithin(node, data) {
      if(!node) {
        return false;
      }
      if(node.value === data) {
        return true;
      }
      return data < node.data ? 
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    return findWithin(this.root, data);
    function findWithin(node, data) {
      if(!node) {
        return;
      }
      if(node.value === data) {
        return node.data;
      }
      return data < node.data ? 
        findWithin(node.left, data) :
        findWithin(node.right, data);
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.root = removeNode(this.root, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (!this.root) {
      return;
    }
    let node = this.root;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this.root) {
      return;
    }
    let node = this.root;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};