# Singly LinkedList

- a stupid way
```js
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var first = new Node('Hi');
first.next = new Node('there, ');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you?');

while(first.next){
    console.log(first.val);
    first = first.next;
}
```

# implement Singly LinkedList
```js
// piece of data - val
// reference to next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //adding a push function to implement the functioning: adding a node to the tail
    push(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}
var list = new SinglyLinkedList();
list.push('Hello');
list.push('World');
list.push('!');
list.traverse();
/* 
Hello
World
!
*/
```
- adding a pop() function
```js
    pop(){
        if(!this.head){ return undefined;}
        var current = this.head;
        var tempTail = current;
        while(current.next){
            tempTail = current;
            current = current.next;
        }
        console.log(current.val);
        console.log(tempTail.val);
    }
```
- if we call list.pop()
```js
/* 
!
World
*/
// since the when current.next == null, stop wihlie loop, that means 
// tempTail stop at penult. The current stop at the last node
```

- updating pop() function
```js
    pop(){
        if(!this.head){ return undefined;}
        var current = this.head;
        var tempTail = current;
        while(current.next){
            tempTail = current;
            current = current.next;
        }
/* 
        hello -> World -> !
                        curr
                 temp
*/
        this.tail = tempTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }


var list = new SinglyLinkedList();
list.push('Hello');
list.push('World');
list.push('!');
list.traverse();
// console.log(list.pop().val);
// console.log(list);
list.pop();
list.pop();
list.pop();
console.log(list);
/* 
Hello
World
!
SinglyLinkedList { head: null, tail: null, length: 0 }
*/
```


