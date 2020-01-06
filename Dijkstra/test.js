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

describe('Add Edge with Weights', ()=>{
    const g = new Graph();   
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C'); 
    test('Adds Edges with weights between two vertices', ()=>{
        g.addEdge('A', 'B', 9);
        g.addEdge('B', 'C', 5);
        g.addEdge('C', 'A', 3);
        expect(g.adjacencyList).toEqual({ A: [ { node: 'B', weight: 9 }, { node: 'C', weight: 3 } ],
        B: [ { node: 'A', weight: 9 }, { node: 'C', weight: 5 } ],
        C: [ { node: 'B', weight: 5 }, { node: 'A', weight: 3 } ] });
        console.log(g.adjacencyList);
    })
})

describe('Dijkstra function',()=>{
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A","B", 4);
    graph.addEdge("A","C", 2);
    graph.addEdge("B","E", 3);
    graph.addEdge("C","D", 2);
    graph.addEdge("C","F", 4);
    graph.addEdge("D","E", 3);
    graph.addEdge("D","F", 1);
    graph.addEdge("E","F", 1);


    graph.Dijkstra("A", "E");
})