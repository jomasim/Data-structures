// a stack uses LIFO

class Stack {
  constructor() {
    this.size = 0;
    this.data = {};
  }

  push(val) {
    this.data[this.size++] = val;
  }
  pop() {
    let popped = this.data[this.size - 1];
    delete this.data[this.size - 1];
    this.size--;
    return popped;
  }
  getSize() {
    return this.size;
  }
  empty() {
    return this.getSize() == 0;
  }
}

let stack = new Stack();

stack.push(20);
stack.push(30);
console.log(stack);
console.log(stack.pop())
console.log(stack.getSize());
console.log(stack.pop())
console.log(stack.empty())
console.log(stack.getSize());
console.log(stack);