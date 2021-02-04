class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    return ++this.length;
  }

  pop() {
    const lastItem = this.data(this.length - 1);
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shift(index);
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++)
      this.data[i] = this.data[i + 1];

    delete this.data[this.length - 1];
    this.length--;
  }
}
