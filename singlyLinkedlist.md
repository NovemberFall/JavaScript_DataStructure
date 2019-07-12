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

# implement Singly LinkedList; Pushing
`Adding a new` **node** `to the end of the Lined List`

`Pushing pseudocode`
- This function should accept a value
- Create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node

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

# Popping
`Removing a` **node** `from the end of the Linked List`
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

# Shifting pseudocode
- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed
```js
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

list.shift();
console.log(list)
list.shift();
console.log(list)
list.shift();
console.log(list)

/* 
output:

SinglyLinkedList {
  head: Node { val: 'World', next: Node { val: '!', next: null } },
  tail: Node { val: '!', next: null },
  length: 2
}
SinglyLinkedList {
  head: Node { val: '!', next: null },
  tail: Node { val: '!', next: null },
  length: 1
}
SinglyLinkedList { head: null, tail: null, length: 0 }
*/
```

# Unshifting        (insertFirst)
- Adding a new node to the beginning of the Linked List!
- This function should accept a value
- Create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to be newly created node
- Othewise set the newly created node's next property to be the current head property on the list. 
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list
```js
    unshift(val){
        var newNode = new Node(val);
        if(!head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
            this.length++;
            return this;
            // return this linked list !
        
    }

list.unshift("1");
list.unshift("2");
list.unshift("3");
console.log(list);

/* 
SinglyLinkedList {
  head: Node { val: '3', next: Node { val: '2', next: [Node] } },
  tail: Node { val: '1', next: [Circular] },
  length: 3
}
*/
```

# Getter
- Retrieving a **node** by its position in the Linked List

`Get pseudocode:`
- This function should accept an index
- if the index is less than zero or greater than or queal to the length of the list, return null
- Loop through the list until you reach the index and return the node at the specific index
```js
    get(index){
        if(index<0 || index>=this.length){
            return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
list.push("Hello");
list.push("Wolrd");
list.push("!");
list.push(":)");
list.push(":(");
var ptr = list.get(4);
console.log(ptr.val);

/* 
:(
*/
```

# Set Value
`Changing the value of a node based on its position in the Linked List`

`Set pseudocode:`
- This function should accept a value and an index
- Use your get function to find the specific node.
- If the node is not found, return false
- if the node is found, set the value of that node to be the value passed to the function and return true
```js
    set(index, value){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }

list.set(0, "!!!");
console.log(list.get(0).val);
list.set(1, "***");
console.log(list.get(1).val);
list.set(2, "😄");
console.log(list.get(2).val);
list.set(3, "👽");
console.log(list.get(3).val);
/*

!!!
***
😄
👽

*/
```

# Insert
`Adding a node to the Linked List at a specific position`

`Insert pseudocode:`
- if the index is less than zero or greater than the length, return false
- if the index is the smae as the length, push a new node to the end of the list
- if the index is 0, unshift(insertFirst) a new node to the start of the list
- Otherwise, using the **get** method, access the node at the index -1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next 
- Increment the length
- Return true




















