class Node {
    constructor(data, prev=null, next=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Adds new node at the end of the list
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Remove node at the end of the list
    pop(){
        if(!this.head) return null;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.tail.prev;
            prev.next = null;
            this.tail = prev;
        }
        
        this.length--;
        return this;
    }

    //Removes node at the start of the list
    shift(){
        if(!this.head) return null;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this;
        }
    }

    //Add node at the start of the list
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get node at a specific position
    get(num){
        if(num < 0 || num >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter < num){
            current = current.next
            counter++
        }
        return current;
    }

    //Set node value at a specific position
    set(num, data){
        let node = this.get(num)
        if(!node) return null;
        node.data = data;
        return node;
    }

    //Insert node at a specific position
    insert(num, data){
        let nodeAt = this.get(num);
        if(!nodeAt) return null;
        let newNode = new Node(data);
        newNode.prev = nodeAt.prev;
        nodeAt.prev.next = newNode;
        nodeAt.prev = newNode;
        newNode.next = nodeAt;
        this.length++;
        return this;
    }

    //Removes a node at a specific position
    remove(num){
        let nodeAt = this.get(num);
        if(!nodeAt) return null;
        nodeAt.next.prev = nodeAt.prev;
        nodeAt.prev.next = nodeAt.next;
        this.length--;
        return this;
    }

    //Reverse the list
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for(var i = 0;i< this.length; i++){
            next = node.prev;
            prev = node.next;
            node.next = next;
            node.prev = prev;
            node = prev;
        }
        return this;
    }
}

module.exports = {Node, DoublyLinkedList};