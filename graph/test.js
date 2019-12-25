const Graph = require('./index');

test('Graph is a class', ()=>{
    expect(typeof Graph.prototype.constructor).toEqual('function');
})

describe('Add Vertex', ()=>{
    const g = new Graph();    
    test('Adds vertex to the graph', ()=>{
        g.addVertex('A');
        expect(g.adjacencyList).toEqual({'A':[]});
        console.log(g);
    })
    test('Dont overwrite a pre-defined vertex', ()=>{
        g.addVertex('A');
        g.adjacencyList['A'].push('a');
        g.addVertex('B');
        g.addVertex('A');
        expect(g.adjacencyList).toEqual({'A':['a'], 'B':[]});
        console.log(g);
    })
})

describe('Add Edge', ()=>{
    const g = new Graph();
    test('Adds edge between two provided vertices', ()=>{
        g.addVertex('A');
        g.addVertex('B');
        g.addVertex('C');
        g.addEdge('A', 'B');
        expect(g.adjacencyList).toEqual({'A':['B'], 'B':['A'], C:[] });
        console.log(g);
        g.addEdge('A','C');
        expect(g.adjacencyList).toEqual({'A':['B', 'C'], 'B':['A'], C:['A'] });
        console.log(g);
    })
})

describe('Remove Edge', ()=>{
    const g = new Graph();
    test('Removes edge between given two vertices', ()=>{
        g.addVertex('A');
        g.addVertex('B');
        g.addVertex('C');
        g.addEdge('A', 'B');
        g.addEdge('A','C');
        g.removeEdge('A', 'B');
        expect(g.adjacencyList).toEqual({'A':['C'], 'B':[], C:['A']});
        console.log(g);
    })
})

describe('Remove Vertex', ()=>{
    const g = new Graph();
    test('Removes all edges of the vertex to remove', ()=>{
        g.addVertex('A');
        g.addVertex('B');
        g.addVertex('C');
        g.addEdge('A', 'B');
        g.addEdge('A','C');
        g.removeVertex('A');
        expect(g.adjacencyList).toEqual({ B:[], C:[]});
        console.log(g);
    })
})


/*
        A
       / \
       B  C
       |  |
       D--E
       \  /
        F
*/
describe('Traverse ', ()=>{
    const g = new Graph();
    g.addVertex('A');
        g.addVertex('B');
        g.addVertex('C');
        g.addVertex('D');
        g.addVertex('E');
        g.addVertex('F');

        g.addEdge('A', 'B');
        g.addEdge('A', 'C');
        g.addEdge('B', 'D');
        g.addEdge('C', 'E');
        g.addEdge('D', 'E');
        g.addEdge('D', 'F');
        g.addEdge('E', 'F');
    
        test('Traverse each node with Depth First recursion', ()=>{
        const result = g.depthFirstRecursive('A');
        expect(result).toEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
        console.log(result);
        })

        test('Traverse each node with Depth First iteration', ()=>{
            const result = g.depthFirstIterative('A');
            expect(result).toEqual([ 'A', 'C', 'E', 'F', 'D', 'B' ]);
            console.log(result);
        })

        test('Traverse each node with Breadth First iteration', ()=>{
            const result = g.breadthFirst('A');
            expect(result).toEqual([ 'A', 'B', 'C', 'D', 'E', 'F' ])
            console.log(result);
        })


})