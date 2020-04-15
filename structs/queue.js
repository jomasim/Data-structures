// queue uses FIFO
// implementation has two pointers

class Queue {
  constructor() {
    this.front = 0;
    this.end = 0;
    this.data = {};
  }

  enqueue(val) {
    this.data[this.end++] = val;
  }
  dequeue() {
    if (!this.empty()) {
      let elem = this.data[this.front];
      delete this.data[this.front++];
      return elem;
    }
  }
  peek() {
    return this.data[this.front];
  }
  size() {
    return this.end - this.front;
  }
  empty() {
    return this.size() == 0;
  }
}

let queue = new Queue();

queue.enqueue(20);
queue.enqueue(30);

console.log(queue);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.empty());
console.log(queue);
