# Linked List

Linked list xətti data strukturlara aid olub, elementləri RAM-da fiziki olaraq ayrılmış hissədə ardıcıl olaraq yerləşmir.  Linked list hər bir elementi "node" ilə ifadə olunur və hər bir node digərinə reference saxlayır. Yəni hər bir node bir sonrakı node üçün özündə informasiya saxlayır:

### [head] -> [next node] -> [next node] -> ... -> null

Beləliklə hər bir node obyekti addressdə ardıcıl yox, xaotik şəkildə yerləşmiş olur. Bunu hörümçək toru kimi təsəvvür etmək olar. Nəticədə linked list-ə sürətli şəkildə yeni node əlavə etmək ( O(1) )  və silmək ( O(n) )mümkündür.   


## Add

```text
Add(element) { -- list-ə əlavə ediləcək olan element
         const node = new Node(element, this.tail); -- müvafiq elementə uyğun node yaradılması
         if (!this.head) { -- listin boş olub olmadığını head vasitəsilə yoxlanılması 
             this.head = node;
             this.tail = this.head;
         } else {
             this.tail.NexNode = node;
             this.tail = node;
         }

         this.Count++;
     }
```