class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    // iterative solution
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            //console.log('Root:', val)
            this.root = newNode;
            return this;
        }
        let current = this.root;
        
        while(true){
            //console.log("Val:",val, "Current:",current.data)
            if(val < current.data){
                //console.log('left:', val)
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                //console.log('right:', val)
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        return this;
    }

    // recurring solution
    // insertRecurring(val){
    //     let newNode = new Node(val)
    //     if(!this.root){
    //         this.root = newNode;
    //         return this;
    //     }
    //     let current = this.root
    //     console.log(val ,':', current.data)
    //     if(val < current.data){
    //         console.log('Val:', val)
    //         if(current.left){
    //             current.left.insertRecurring(val)
    //         }else{
    //             current.left = newNode;
    //         }
    //     }else{
    //         console.log('Val:', val)
    //         console.log(current.right)
    //         if(current.right){
    //             current.right.insertRecurring(val)
    //         }else{
    //             console.log('Yeha aayega')
    //             current.right = newNode;
    //         }
    //     }
    //     return this;
    // }

    find(val){
        if(!this.root) return null;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.data){
                current = current.left
            }else if(val > current.data){
                current = current.right
            }else{
                found = true
            }
        }
        return current;
    }
}

module.exports={Node, BST};