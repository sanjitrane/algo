const S = require('./index');
const Node = S.Node;
const Stack = S.Stack;

test("Node is a class",()=>{
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test("Stack is a class", ()=>{
    expect(typeof Stack.prototype.constructor).toEqual('function');
});

describe("Push", ()=>{
    test("Adds a node at the top of the stack", ()=>{
        let s = new Stack();
        s.push('A');
        s.push('B');
        expect(s.first.data).toEqual('B');
        console.log('Push:', s);
    })
});

describe("Pop", ()=>{
    test("Removes a node from the top of the stack", ()=>{
        let s = new Stack();
        s.push('A');
        s.push('B');
        s.push('C');
        s.pop();
        expect(s.first.data).toEqual('B');
        console.log('Pop:', s);
    })
})