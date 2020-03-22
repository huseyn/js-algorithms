# Hashtable

Read about hashtable in other languages <br />
[_Azərbaycan dilində_](README-az.md)

Elements in hashtable are stored in array. Index of each element in the array is determined based on its hash value. When searching for any element whether is exist in hashtable or not the hash of the corresponding element is calculated and then looking for by using hash value as an index. Therefore, it is known at O(1) time whether an element is exist or not in a hashtable.

This is not about cryptographic hashing. The hash value must be numeric so that it should be used to determine the index in the array.

Arrays is a fixed-size data structure. An n-length array is created inside the hashable so when an element is added, the hash of that element is calculated and the corresponding index of the array becomes that hash. Then the added element is set to that indexed address.

```
add(element){
    hash = getHash(element)
    localArray[hash] = element
}
```

The Question. What if the hash value of the input element is greater than the length of the array? In this case, the hash will be calculated in the same way, but the index will be mode that division of array counter to array length. That is, if the hash of an input element is 15 which an array of length 10, the index will be 5, and the element will be located in the 5th index.

```
add(element){
    hash = getHash(element)
    index = hash % localArray.Length
    localArray[index] = element
}
```

The Question. What if the same hash is calculated for the two different elements? In addition, describe that the x input element hash value is 1500. The index of x will be 500 in 1000 length array. What if the next time you want to add the element y which it's own original hash value is 500? How can two different elements can be located in the same index? This problem is solved with a linkedlist. Now the elements are stored as node objects, and each node is a reference to the next node. In general, elements in the internal array of hashtable are stored as nodes, even if it's a single node.

![Alt text](linkedlist.PNG)

```
add(element){
    hash = getHash(element)
    index = hash % localArray.Length
    node = new Node(element);

    if(localArray[index]){
        node.NextNode = localArray[index]
        localArray[index] = node
    }
}
```

Due to the array has a fixed size, when elements are added to the hashtable, the array will be overfilled after a while, and the newly added elements will only can be formed a linkedlist (collusion). This causes the search to be in O (n) time, not O (1) time. In a hashtable, an array is resized to minimize the retention of elements in a linkedlist. The length of array is increased when 70% of the array is used. This process is called the load factor. Suppose that the hash of one of the input numbers is 54 and the another one  of hash is 154 which in an array of length 100. Because of the indexes of these two elements are the same, they form a linkedlist. Then the array is resized and when the length is 200, the element with hash 154 is recalculated and placed in its original index.