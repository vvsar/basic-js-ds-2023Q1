const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    this.array.push(element);
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    if(this.array.length == 0) return;
    let el = this.array[this.array.length - 1];
    this.array.pop();
    return el;
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    if(this.array.length == 0) return;
    let el = this.array[this.array.length - 1];
    return el;
  }
}

module.exports = {
  Stack
};