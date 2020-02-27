class Stack {

    constructor() {
        this.container = [];
        this.count = 0;
    }

    push(item) {
        this.container[this.count] = item;
        this.count++;
    }

    pop() {
        this.count--;
        return this.container.pop();
    }

    peek() {
        return this.container[this.count - 1];
    }

    clear() {
        this.count = 0;
        this.container = [];
    }

    contains(item) {
        let index = 0;
        while (index < this.count) {
            if (this.container[index] === item) {
                return true;
            }
            index++;
        }
        return false;
    }

    toArray() {
        return this.container;
    }
}

const stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
const a = stack.peek();
const b = stack.pop();
const c = stack.contains(2);
const d = stack.toArray();
stack.clear();