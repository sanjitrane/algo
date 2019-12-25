const D = require('./index');
const Node = D.Node;
const DoublyList = D.DoublyLinkedList;

test("Node is a class", ()=>{
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test("DoublyLinkedList is a class", ()=>{
    expect(typeof DoublyList.prototype.constructor).toEqual('function');
});

describe("Push",()=>{
    test("Add node at the end of the list",()=>{
        let d = new DoublyList();
        d.push('A');
        expect(d.head.data).toEqual('A');
        expect(d.tail.data).toEqual('A');
        d.push('B');
        expect(d.head.next.data).toEqual('B');
        d.push('C');
        console.log('Push:', d);
    })
});

describe("Pop", ()=>{
    test("Removes node from the end of the list", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.pop();
        expect(d.head).toEqual(null);
        expect(d.length).toEqual(0);
        console.log('Pop:', d);
    })
});

describe("Shift", ()=>{
    test("Remove node from the start of the list", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.shift();
        expect(d.head).toEqual(null);
        expect(d.length).toEqual(0);
        d.push('A');
        d.push('B');
        d.push('C');
        d.shift();
        expect(d.head.data).toEqual('B');
        expect(d.head.prev).toEqual(null);
        expect(d.length).toEqual(2);
        console.log('Shift:', d);
    })
});

describe("Unshift", ()=>{
    test("Add node at the start of the list", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.push('C');
        d.unshift('New Node');
        expect(d.head.data).toEqual('New Node');
        expect(d.head.next.data).toEqual('A');
        console.log('Unshift:', d);
    })
});

describe("Get", ()=>{
    test("Get node at a specific position", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.push('B');
        d.push('C');
        const node = d.get(1);
        expect(node.data).toEqual('B');
        console.log('Get:', node)
    })
});

describe("Set", ()=>{
    test("Set value of a node at a specific position", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.push('B');
        d.push('C');
        const node = d.set(1, 'New node');
        expect(d.head.next.data).toEqual('New node');
        console.log('Set:', d);
    })
});

describe("Insert", ()=>{
    test("Insert node at a specific position", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.push('B');
        d.push('C');
        d.insert(1, 'New node');
        expect(d.head.next.data).toEqual('New node');
        console.log('Insert:', d)
    })
});

describe("Remove",()=>{
    test("Remove node at a specific position", ()=>{
        let d = new DoublyList();
        d.push('A');
        d.push('B');
        d.push('C');
        d.remove(1);
        expect(d.head.next.data).toEqual('C');
        expect(d.head.next.prev.data).toEqual('A');
        console.log('Remove:', d);
    })
});

describe("Reverse", ()=>{
    let d = new DoublyList();
        d.push('A');
        d.push('B');
        d.push('C');
        d.push('D');
        d.reverse();
        expect(d.head.data).toEqual('D');
        expect(d.tail.data).toEqual('A');
        console.log('Reverse:', d);
})
