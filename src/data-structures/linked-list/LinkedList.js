 class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.Count = 0;
    }

    Add(element) {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.NexNode = node;
            this.tail = node;
        }

        this.Count++;
    }

    Remove(element) {

        if (this.Count === 0) {
            return -1;
        }

        let index = 0;
        let tempNode = this.head;

        if (tempNode.Element === element) {
            this.head = this.head.NexNode;
            if (!this.head) {
                this.tail = null;
            }
            this.Count--;
            return index;
        }

        while (tempNode.NexNode) {
            if (tempNode.NexNode.Element === element) {
                this.Count--;
                tempNode.NexNode = tempNode.NexNode.NexNode;
                if (!tempNode.NexNode) {
                    this.tail = tempNode;
                }
                index++;
                break;
            }
            tempNode = tempNode.NexNode;
            index++;
        }

        return index;
    }

    RemoveAt(index) {
        if (index < 0 || index >= this.Count) {
            throw "Index is out of bound";
        }

        if (index == 0) {
            this.head = this.head.NexNode;
            if (!this.head) {
                this.tail = null;
            }
            this.Count--;
            return;
        }

        let currentIndex = 1;
        let tempNode = this.head;

        while (currentIndex < index) {
            currentIndex++;
            tempNode = tempNode.NexNode;
        }

        this.Count--;
        tempNode.NexNode = tempNode.NexNode.NexNode;

        if (!tempNode.NexNode)
            this.tail = tempNode;
    }

    IndexOf(element) {

        if(this.Count ===0){
            return -1;
        }

        let index = 0;
        let tempNode = this.head;

        if (tempNode.Element === element) {
            return index;
        }

        while (tempNode.NexNode) {
            index++;
            if (tempNode.NexNode.Element === element) {
                return index;
            }
            tempNode = tempNode.NexNode;
        }

        return -1;
    }

    Insert(index, element) {
        if (index < 0 || index > this.Count) {
            throw "Index is out of bound";
        }

        let tempNode = this.head;
        let singleNode = tempNode.NexNode;

        if (index == 0) {
            singleNode = this.head;
            this.head = new Node(element);
            this.head.NexNode = singleNode;
            return;
        }

        let currentIndex = 1;
        while (currentIndex < index) {
            currentIndex++;
            tempNode = tempNode.NexNode;
        }

        singleNode = tempNode.NexNode;
        tempNode.NexNode = new Node(element);
        tempNode.NexNode.NexNode = singleNode;
    }

    Contains(element) {
        return this.IndexOf(element) != -1;
    }
}


class Node {
    constructor(element) {
        this.Element = element;
        this.NexNode = null;
    }
}


const linkedList = new LinkedList();
// linkedList.Add("Elmar");
// linkedList.Add("Mirze");

console.log(linkedList.IndexOf("test"));
module.exports = LinkedList;