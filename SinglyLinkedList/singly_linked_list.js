// piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('Hi');
// first.next = new Node('there, ');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you?');

// while(first.next){
//     console.log(first.val);
//     first = first.next;
// }

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //adding a push function to implement the functioning: adding a node to the tail
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) { return undefined; }
        var current = this.head;
        var tempTail = current;
        while (current.next) {
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
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        // return this linked list !
    }
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

    set(index, value){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index<0 || index>this.length){
            return false;
        }
        if(index === this.length){
            return this.push(value);
        }
        if(index === 0){
            return this.unshift(value);
        }
        var newNode = new Node(value);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

}

var list = new SinglyLinkedList();
// list.push('Hello');
// list.push('World');
// list.push('!');
// list.traverse();



// console.log(list.pop().val);
// console.log(list);
// list.pop();
// list.pop();
// list.pop();
// console.log(list);


// list.shift();
// console.log(list)
// list.shift();
// console.log(list)
// list.shift();
// console.log(list)


// list.unshift("1");
// list.unshift("2");
// list.unshift("3");
// console.log(list);



// list.push("Hello");
// list.push("Wolrd");
// list.push("!");
// list.push(":)");
// list.push(":(");
//var ptr = list.get(4);
//console.log(ptr.val);

// list.set(0, "!!!");
// console.log(list.get(0).val);
// list.set(1, "***");
// console.log(list.get(1).val);
// list.set(2, "😄");
// console.log(list.get(2).val);
// list.set(3, "👽");
// console.log(list.get(3).val);

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.insert(1, "😄");
