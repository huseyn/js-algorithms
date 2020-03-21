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
        // this.temphash = 10;
    }

    hashCode(element) {
        var h = 0, l = element.length, i = 0;
        if (l > 0)
            while (i < l)
                h = (h << 5) - h + element.charCodeAt(i++) | 0;
        return Math.abs(h);
        // return this.temphash;
    };

    put(element) {

        if (this.count / this.length > 0.7) {
            const ht = new Hashtable(this.length * 2);
            for (const item of this.array) {
                ht.put(item);
            }
            this.array = ht.array;
        }

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

        let tempNode = this.array[index];

        if (!tempNode) {
            return;
        }

        if (tempNode.Element === element) {
            this.array[index] = tempNode.NextNode;
            this.count--;
            return;
        }

        while (tempNode.NextNode) {
            if (tempNode.NextNode.Element === element) {
                tempNode.NextNode = tempNode.NextNode.NextNode;
                this.count--;
                return;
            }
            tempNode = tempNode.NextNode;
        }
    }

    contains(element) {
        const hashCode = this.hashCode(element);
        const index = hashCode % this.length;

        let tempNode = this.array[index];
        while (tempNode) {
            if (tempNode.Element === element) {
                return true;
            }
            tempNode = tempNode.NextNode;
        }
        return false;
    }
}

const ht = new Hashtable(30);
ht.put('a');
ht.put('b');
ht.put('c');
ht.put('d');
ht.contains('a');
ht.remove('a');