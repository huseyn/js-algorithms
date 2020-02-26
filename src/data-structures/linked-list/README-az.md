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

         this.Count++; -- list-dəki element sayını bir vahid artır
     }
```

## Remove

```text
Remove(element) { -- list-dən silinəcək olan element

         if (this.Count === 0) { -- list boşdursa -1 qaytar
             return -1;
         }

         let index = 0;
         let tempNode = this.head;

         if (tempNode.Element === element) { -- silinəcək elementin head (ilk node) olub olmadığı
             this.head = this.head.NexNode;
             if (!this.head) { -- həmçinin son elementdirsə tail də null olmalıdır. 
                 this.tail = null;
             }
             this.Count--; -- list-dəki element sayını bir vahid azalt
             return index; -- silinən elementin indeksinin qaytar
         }

         while (tempNode.NexNode) { 
             if (tempNode.NexNode.Element === element) {
                 this.Count--;
                 tempNode.NexNode = tempNode.NexNode.NexNode; -- NextNode bir sonrakı node ilə əvəz edildikdə mövcud node silinmiş hesab olunur və heç bir node ilə bağlantısı qalmadığına görə GC tərəfində təmizlənir. 
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