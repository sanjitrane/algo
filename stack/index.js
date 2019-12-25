class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //Adds to the start of the stack
    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        this.length++;
    }

    //Removes from the start of the stack
    pop(val){
        if(this.length === 0) return null;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
    } 
}

module.exports = {Node, Stack};