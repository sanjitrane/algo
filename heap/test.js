const bh = require('./index');
const BinaryHeap = bh.MaxBinaryHeap;

test('MaxBinaryHeap is a class', ()=>{
    expect(typeof BinaryHeap.prototype.constructor).toEqual('function');
})

describe('Insert', ()=>{
    test('Inserts at the end of the array and bubles to the required position', ()=>{
        const b = new BinaryHeap();
        b.insert(41);
        b.insert(39);
        b.insert(33);
        b.insert(18);
        b.insert(27);
        b.insert(12);
        b.insert(55);
        expect(b.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
        console.log(b.values);
    })
})

describe('Extract', ()=>{
    test('Extracts the max value and assigns the next max as the root', ()=>{
        const b = new BinaryHeap();
        b.insert(41);
        b.insert(39);
        b.insert(33);
        b.insert(18);
        b.insert(27);
        b.insert(12);
        b.insert(55);
        b.extractMax();
        expect(b.values).toEqual([ 41, 39, 33, 18, 27, 12 ]);
        b.extractMax();
        expect(b.values).toEqual([39, 27, 33, 18, 12])
        console.log(b.values);
    })
})