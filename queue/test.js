const Q = require('./index');
const Node = Q.Node;
const Queue = Q.Queue;

test("Node is a class", ()=>{
    expect(typeof Node.prototype.constructor).toEqual('function');
})

test("Queue is a class", ()=>{
    expect(typeof Queue.prototype.constructor).toEqual('function');
})

describe("Enqueue", ()=>{
    test("Adds to the end of the queue", ()=>{
        const q = new Queue();
        q.enQueue('A');
        q.enQueue('B');
        expect(q.first.data).toEqual('A');
        //expect(q.last.data).toEqual('B');
        console.log('Enqueue:', q);
    })
})

describe("Dequeue", ()=>{
    test("Removes from the start of the queue", ()=>{
        const q = new Queue();
        q.enQueue('A');
        q.deQueue();
        expect(q.first).toEqual(null);
        q.enQueue('A');
        q.enQueue('B');
        q.enQueue('C');
        q.deQueue();
        expect(q.first.data).toEqual('B');
        console.log("Dequeue:", q);
    })
})
