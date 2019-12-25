class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class BSF{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(val < current.data){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        return this;
    }


    bsf(){
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift()
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            data.push(node.data);
        }
        return data;
    }
};

module.exports = {Node, BSF}