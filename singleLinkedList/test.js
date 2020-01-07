const S = require("./index");
const Node = S.Node;
const SingleList = S.SingleList;

test("Node is a class", ()=>{
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test("SingleList is a class", ()=>{
    expect(typeof SingleList.prototype.constructor).toEqual('function');
});

describe("A Node", ()=>{
    test("has properties data and next",()=>{
        const node = new Node('a', 'b');
        expect(node.data).toEqual('a');
        expect(node.next).toEqual('b');
    })
});

describe("Push Node",()=>{
    test("If only one node, then head and next pointing to the same node",()=>{
        const l = new SingleList();
        expect(l.length).toEqual(0);
        l.push('A');
        expect(l.head.data).toEqual('A');
        expect(l.tail.data).toEqual('A');
        expect(l.length).toEqual(1);
    })

    test("If head is present then the new node should be pointer to the tail of previous node",()=>{
        const l = new SingleList();
        l.push('A');
        l.push('B');
        expect(l.head.data).toEqual('A');
        expect(l.tail.data).toEqual('B');
        expect(l.length).toEqual(2);
        
        l.push('C');
        console.log(l.head.next.next)
        expect(l.tail.data).toEqual('C')
        expect(l.length).toEqual(3);
        console.log('Push:', l)
    })
});

describe("Pop Node",()=>{
    test("If no node is present it should return null", ()=>{
        const l = new SingleList();
        const node = l.pop();
        expect(node).toEqual(null);
    });

    test("Removes the last node and assigns the second last node next value to null", ()=>{
        const l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        expect(l.length).toEqual(3);
        
        const node = l.pop();
        expect(l.tail.data).toEqual('B');
        expect(l.tail.next).toEqual(null);
        expect(l.length).toEqual(2);
        console.log('Pop:',l);
        
    })
});

describe("Shift", ()=>{
    test("If no head then return null", ()=>{
        const l = new SingleList();
        const node = l.shift();
        expect(node).toEqual(null);
    });

    test("Removes the first node and assigns the head to the next node", ()=>{
        const l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        const node = l.shift();
        expect(l.head.data).toEqual('B');
        expect(l.length).toEqual(2);
        console.log('Shift:', l)
    })
})

describe("Unshift", ()=>{
    test("Adds node to the start of the list", ()=>{
        const l = new SingleList();
        l.push('A');
        l.unshift('First');
        expect(l.head.data).toEqual('First');
        expect(l.tail.data).toEqual('A');
        expect(l.length).toEqual(2);
        console.log('Unshift:', l)
    })
})

describe("Get", ()=>{
    test("Returns node at a given position", ()=>{
        const l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        l.push('D');
        const node = l.get(2);
        expect(node.data).toEqual('C');
        console.log('Get:', node)
    })
})

describe("Set", ()=>{
    test("Sets the value at the given position", ()=>{
        const l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        l.push('D');
        const node = l.set(2, 'New');
        expect(node.data).toEqual('New');
        console.log('Set:',node)
    })
})

describe("Insert", ()=>{
    test("Inserts node at a given position", ()=>{
        let l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        l.push('D');
        l.insert(2,'New node');
        expect(l.head.next.next.data).toEqual('New node');
        expect(l.length).toEqual(5);
        console.log('Insert:',l);
    })
})

describe("Remove", ()=>{
    test("Removes node at a given position", ()=>{
        let l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        l.push('D');
        l.remove(1);
        expect(l.head.next.next.data).toEqual('D');
        console.log('Remove:', l)

    })
})

describe("Reverse", ()=>{
    test("Reverses a given list", ()=>{
        let l = new SingleList();
        l.push('A');
        l.push('B');
        l.push('C');
        l.push('D');
        l.reverse();
        expect(l.head.data).toEqual('D');
        expect(l.head.next.data).toEqual('C');
        console.log('Reverse:', l);
    })
})

describe("Rotate", ()=>{
    test("Rotates a list as per the number passed", ()=>{
        let l = new SingleList()
        l.push(5).push(10).push(15).push(20).push(25);
        l.rotate(3);
        expect(l.head.data).toEqual(20);
        expect(l.head.next.data).toEqual(25);
        expect(l.tail.data).toEqual(15);
        console.log('Rotate', l)
    })
})