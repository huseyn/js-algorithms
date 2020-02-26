# Linked List

Read about linked list in other languages <br />
[_Azərbaycanca dilində_](README-az.md)

Linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.  Linked list items are considered node and each node refer to the next node. So each node keep
information about their next node:

### [head] -> [next node] -> [next node] -> ... -> null

Thus, each node object can be located in a chaotic rather than consecutive address. We can imagine that as spider's web. As a result, we can effiecently add new node ( O(1) ) or remove node ( O(n) ) from linked list


## Add

```text
Add(element) { -- element is an item to add to the list
         const node = new Node(element, this.tail); -- creation of node for the proper element
         if (!this.head) { -- checking whether the list is empty
             this.head = node;
             this.tail = this.head;
         } else {
             this.tail.NexNode = node;
             this.tail = node;
         }

         this.Count++; -- increase the number of items in the list by one
     }
```

## Remove

```text
Remove(element) { -- element is an item to remove from the list

         if (this.Count === 0) { -- return -1 if list is an empty
             return -1;
         }

         let index = 0;
         let tempNode = this.head;

         if (tempNode.Element === element) { -- checking whether an element is head
             this.head = this.head.NexNode;
             if (!this.head) { -- assign tail to null if an element is last one. 
                 this.tail = null;
             }
             this.Count--; -- decrease the number of items in the list by one
             return index; -- return index of removed element
         }

         while (tempNode.NexNode) { 
             if (tempNode.NexNode.Element === element) {
                 this.Count--;
                 tempNode.NexNode = tempNode.NexNode.NexNode; -- When NextNode is replaced 
                 by a subsequent node, the existing node is considered deleted
                 and is cleared by the GC as there is no reference to any nodes. 
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
```
