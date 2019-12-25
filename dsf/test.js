const D = require('./index');
const Node = D.Node;
const DSF = D.DSF;

test('Node is a class', ()=>{
    expect(typeof Node.prototype.constructor).toEqual('function');
})

test('DSF is a class', ()=>{
    expect(typeof DSF.prototype.constructor).toEqual('function');
})

/*
  10
 6  15
3 8   20
*/

describe('DSF PreOrder', ()=>{
    let d = new DSF();
        d.insert(10);
        d.insert(6);
        d.insert(15);
        d.insert(3);
        d.insert(8);
        d.insert(20);
    test('Depth first Pre Order format', ()=>{
        const data = d.dsfPreOrder();
        expect(data).toEqual([10,6,3,8,15,20]);
        console.log(data);
    })

    test('Depth first Post Order format', ()=>{
        const data = d.dsfPostOrder();
        expect(data).toEqual([3,8,6,20,15,10]);
        console.log(data);
    })

    test('Depth first Inorder format', ()=>{
        const data = d.dsfFirstInOrder();
        expect(data).toEqual([3, 6, 8, 10, 15, 20]);
        console.log(data);
    })
})