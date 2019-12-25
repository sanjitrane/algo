class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class SingleList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adds new node at the end of the list
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    };

    // Removes node from the end of the list
    pop(){
        if(!this.head) return null;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return null;
        }else{
            let current = this.head;
            let prev = current;
            while(current.next){
                prev = current;
                current = current.next;
            };
            this.tail = prev;
            this.tail.next = null;
            this.length--;
            return current;
        }
        
        
    }

    //Removes node from the start of the list
    shift(){
        if(!this.head) return null;
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }

    // Adds node to the start of the list
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.push(val)
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    // Returns the node at a specific position
    get(num){
        if(num < 0 || this.length < num) return null;
        let counter = 0;
        let node = this.head;
        while(counter < num){
            node = node.next;
            counter++
        }
        return node;
    }

    // Set the value at a given position
    set(num, data){
        let node = this.get(num);
        if(!node) return null;
        node.data = data;
        return node;
    }

    //Insert node at a specific position
    insert(num, data){
        if(num < 0 || num >= this.length) return null;
        if(num===0){
            this.unshift(data)
        }else if(num === this.length-1){
            this.push(data)
        }else{
            let newNode = new Node(data)
            let nodeAt = this.get(num)
            let prev = this.get(num-1)
            prev.next = newNode;
            newNode.next = nodeAt;
            this.length++;
            return this;
        }
    }

    remove(num){
        if(num < 0 || num >= this.length) return null;
        if(num === 0){
            this.shift()
        }else if(num === this.length-1){
            this.pop()
        }else{
            let current = this.get(num);
            let prev = this.get(num-1);
            prev.next = current.next;
            this.length--;
        }
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

module.exports = {Node, SingleList}