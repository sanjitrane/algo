const B = require('./index');
const Node = B.Node;
const BSF = B.BSF;

test('Node is a class', ()=>{
    expect(typeof Node.prototype.constructor).toEqual('function')
});

test('BSF is a class', ()=>{
    expect(typeof BSF.prototype.constructor).toEqual('function')
});

/*
10
6 15
4  13
*/

describe('BSF', ()=>{
    test('Creates an array with nodes in breath first format', ()=>{
        let b = new BSF();
        b.insert(10);
        b.insert(6);
        b.insert(15);
        b.insert(13);
        b.insert(4);
        const arr = b.bsf();
        expect(arr).toEqual([10, 6, 15, 4, 13]);
        console.log('BSF:', arr)
    })
})


