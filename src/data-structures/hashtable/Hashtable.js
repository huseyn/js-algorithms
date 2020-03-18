class Node {
    constructor(element, nextNode = null) {
        this.Element = element;
        this.NextNode = nextNode;
    }
}

class Hashtable {
    constructor(length) {
        this.array = new Array(length);
        this.length = length;
        this.count = 0;
        //this.temphash = 10;
    }

    hashCode(element) {
        var h = 0, l = element.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + element.charCodeAt(i++) | 0;
        return Math.abs(h);
        //return this.temphash;
    };

    put(element) {
        const hashCode = this.hashCode(element);
        const node = new Node(element);
        if (hashCode > this.length) {
            const index = hashCode % this.length;
            if (this.array[index]) {
                node.NextNode = this.array[index];
                this.array[index] = node;
                this.count++;
            } else {
                this.array[index] = element;
                this.count++;
            }
        } else {
            if (this.array[hashCode]) {
                node.NextNode = this.array[hashCode];
                this.array[hashCode] = node;
                this.count++;
            } else {
                this.array[hashCode] = element;
                this.count++;
            }
        }
    }

    remove(element) {
        const hashCode = this.hashCode(element);
        if (hashCode > this.length) {
            const index = hashCode % this.length;
            if (this.array[index]) {
                if (this.array[index].Element === element) {
                    this.array[index] = undefined;
                    this.count--;
                } else {
                    while (this.array[index].NextNode) {
                        if (this.array[index].NextNode === element) {
                            this.array[index].NextNode = undefined;
                            break;
                        }
                    }
                    this.count--;
                }
            }
        } else {
            if (this.array[hashCode]) {
                if (this.array[hashCode].Element === element) {
                    this.array[hashCode] = undefined;
                    this.count--;
                } else {
                    while (this.array[hashCode].NextNode) {
                        if (this.array[hashCode].NextNode === element) {
                            this.array[hashCode].NextNode = undefined;
                            break;
                        }
                    }
                    this.count--;
                }
            }
        }
    }

    contains(element) {
        const hashCode = this.hashCode(element);
        if (hashCode > this.length) {
            const index = hashCode % this.length;
            if (this.array[index]) {
                if (this.array[index].Element === element) {
                    return true;
                } else {
                    while (this.array[index].NextNode) {
                        if (this.array[index].NextNode === element) {
                            return true;
                        }
                    }
                }
            }
        } else {
            if (this.array[hashCode]) {
                if (this.array[hashCode].Element === element) {
                    return true;
                } else {
                    while (this.array[hashCode].NextNode) {
                        if (this.array[hashCode].NextNode === element) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }
}

const ht = new Hashtable(5);
ht.put('huseyn');
ht.put('huseyn');
ht.put('asdf');
ht.put('fg');
ht.contains('huseyn');