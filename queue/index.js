class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // Adds to the end of the queue
    enQueue(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    //Removes the first element of the queue
    deQueue(){
        if(this.length === 0) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }else{
            this.first = temp.next;
        }
        
        this.length--;
    }
}

module.exports = { Node, Queue };