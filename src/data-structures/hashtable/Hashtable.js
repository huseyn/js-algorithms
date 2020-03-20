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
        const index = hashCode % this.length;

        const head = this.array[index];
        let tempNode = head;

        while (tempNode) {
            if (tempNode.Element === element) {
                return;
            }
            tempNode = tempNode.NextNode;
        }

        node.NextNode = head;
        this.array[index] = node;
        this.count++;
    }

    remove(element) {
        const hashCode = this.hashCode(element);
        const index = hashCode % this.length;
        if (this.array[index]) {
            if (this.array[index].Element === element) {
                this.array[index] = this.array[index].NextNode;
                this.count--;
            } else {
                while (this.array[index].NextNode) {
                    if (this.array[index].NextNode === element) {
                        this.array[index].NextNode = this.array[index].NextNode;
                        break;
                    }
                }
                this.count--;
            }
        }
    }

    contains(element) {
        const hashCode = this.hashCode(element);
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
        return false;
    }
}

const ht = new Hashtable(5);
ht.put('huseyn');
ht.put('huseyn');
ht.put('asdf');
ht.put('fg');
ht.contains('huseyn');