class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class DSF{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val)
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

    dsfPreOrder(){
        const data = [];
        function traverse(node){
            data.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    dsfPostOrder(){
        const data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.data);
        }
        traverse(this.root);
        return data;
    }

    dsfFirstInOrder(){
        const data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.data);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    
}

module.exports={Node, DSF};