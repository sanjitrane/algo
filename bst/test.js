const T = require('./index');
const Node = T.Node;
const BST = T.BST;

test("Node is a class",()=>{
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test("BST is a class", ()=>{
    expect(typeof BST.prototype.constructor).toEqual('function');
});

/*
     10
    7  12
  6     13   
*/
describe("Insert", ()=>{
    test("Inserts a node based on its relation to the root", ()=>{
        let b = new BST();
        b.insert(10);
        expect(b.root.data).toEqual(10);
        b.insert(7);
        expect(b.root.left.data).toEqual(7);
        b.insert(12);
        b.insert(13);
        b.insert(6);
        console.log('Insert:', b.root);
    })
})

// describe("Insert via recurring", ()=>{
//     test("Recurring solution for inserting node", ()=>{
//         let b = new BST();
//         b.insertRecurring(10);
//         expect(b.root.data).toEqual(10);
//         b.insertRecurring(7);
//         console.log(b.root.left);
//         expect(b.root.left.data).toEqual(7);
//         b.insertRecurring(12);
//         b.insertRecurring(13);
//         b.insertRecurring(6);
//         console.log('Insert Recurring:', b.root);
//     })
// })

describe('Find', ()=>{
    test('Finds a node', ()=>{
        let b = new BST();
        let node
        b.insert(10);
        b.insert(7);
        b.insert(13);
        b.insert(3);
        node = b.find(7);
        expect(node.data).toEqual(7);
        node = b.find(100);
        expect(node).toEqual(null);
    })
})
