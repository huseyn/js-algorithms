class LinkedList {
    Count = 0;

    constructor() {
        this.head = null;
        this.tail = null;
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
        let index = 0;
        let tempNode = this.head;

        if (tempNode.NexNode.Element === element) {
            this.Count--;
            return index;
        }

        while (tempNode.NexNode != null) {
            if (tempNode.NexNode.Element === element) {
                this.Count--;
                tempNode.NexNode = tempNode.NexNode.NexNode;
                if (tempNode.NexNode == null) {
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
            throw "Index is out of bound"
        }

        if (index == 0) {
            this.Count--;
            this.head = this.head.NexNode;
            if (this.head == null) {
                this.tail = null;
            }
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

        if (tempNode.NexNode == null)
            this.tail = tempNode;

    }
}

class Node {
    constructor(element) {
        this.Element = element;
        this.NexNode = null;
    }
}


const linkedList = new LinkedList();
linkedList.Add("Huseyn");
linkedList.Add("Aziz");
linkedList.Add("Arzu");
linkedList.Add("Elgiz");

const index = linkedList.Remove("Arzu");