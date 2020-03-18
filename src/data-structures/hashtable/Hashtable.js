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
    }

    hashCode(element) {
        var h = 0, l = element.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + element.charCodeAt(i++) | 0;
        return Math.abs(h);
    };

    put(element) {
        const hashCode = this.hashCode(element);
        const node = new Node(element);
        if (hashCode > this.length) {
            const index = hashCode % this.length;
            if (this.array[index]) {
                node.NextNode = this.array[index];
                this.array[index] = node;
            } else {
                this.array[index] = element;
            }
        } else {
            if (this.array[hashCode]) {
                node.NextNode = this.array[hashCode];
                this.array[hashCode] = node;
            } else {
                this.array[hashCode] = element;
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
                } else {
                    const current = this.array[index].NextNode;
                    const prev = this.array[index];
                    while (current) {
                        if (current.Element === element) {
                            prev.NextNode = current.NextNode;
                        }
                        prev = current;
                        current = current.NextNode;
                    }
                }
            }
        } else {
            if (this.array[hashCode]) {
                if (this.array[hashCode].Element === element) {
                    this.array[hashCode] = undefined;
                } else {
                    const current = this.array[hashCode].NextNode;
                    const prev = this.array[hashCode];
                    while (current) {
                        if (current.Element === element) {
                            prev.NextNode = current.NextNode;
                        }
                        prev = current;
                        current = current.NextNode;
                    }
                }
            }
        }
    }

    contains(element) {
        const hashCode = this.hashCode(element);
        if (hashCode > this.length) {
            const index = hashCode % this.length;
            if (this.array[index] === element) {
                return true;
            }
        } else {
            if (this.array[hashCode] === element) {
                return true;
            }
        }

        return false;
    }
}

const ht = new Hashtable(1000);
ht.put('huseyn');
ht.put('huseyn');
ht.remove('huseyn');
ht.contains('huseyn');