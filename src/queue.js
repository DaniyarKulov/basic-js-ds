const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.que = {};
    this.headIndex = null;
    this.tailIndex = null;
  }
  getUnderlyingList() {
    return this.headIndex;
  }

  enqueue(value) {
    this.que[this.tailIndex] = value;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.que[this.headIndex];
    delete this.que[this.headIndex];
    this.headIndex++;
    return item;
  }
}

module.exports = {
  Queue,
};
