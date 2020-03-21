 class LinkedList {
     constructor() {
         this.head = null;
         this.tail = null;
         this.Count = 0;
     }

     add(element) {
         const node = new Node(element, this.tail);
         if (!this.head) {
             this.head = node;
             this.tail = this.head;
         } else {
             this.tail.NexNode = node;
             this.tail = node;
         }

         this.Count++;
     }

     remove(element) {

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

     removeAt(index) {
         if (index < 0 || index >= this.Count) {
             throw new Error("Index is out of bound");
         }

         let nodeElement;
         if (index == 0) {
             nodeElement = this.head.Element;
             this.head = this.head.NexNode;
             if (!this.head) {
                 this.tail = null;
             }
             this.Count--;
             return nodeElement;
         }

         let currentIndex = 1;
         let tempNode = this.head;

         while (currentIndex < index) {
             currentIndex++;
             tempNode = tempNode.NexNode;
         }

         this.Count--;
         nodeElement = tempNode.NexNode.Element;
         tempNode.NexNode = tempNode.NexNode.NexNode;

         if (!tempNode.NexNode)
             this.tail = tempNode;

         return nodeElement;
     }

     indexOf(element) {

         if (this.Count === 0) {
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

     insert(index, element) {
         if (index < 0 || index > this.Count) {
             throw new Error("Index is out of bound");
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

     contains(element) {
         return this.IndexOf(element) != -1;
     }
 }


 class Node {
     constructor(element, prevNode = null, nextNode = null) {
         this.Element = element;
         this.NexNode = nextNode;
         this.PrevNode = prevNode;
     }
 }


 const linkedList = new LinkedList();

 console.log(linkedList.indexOf("test"));
 module.exports = LinkedList;