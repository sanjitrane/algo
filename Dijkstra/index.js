class PriorityQueue{
    constructor(){
        this.values = []
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort()
    }

    dequeue(){
        return this.values.shift()
    }

    sort(){
        this.values.sort((a,b)=> a.priority - b.priority);
    }
}

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push({node: vertex2, weight});
            this.adjacencyList[vertex2].push({node: vertex1, weight});
        }
    }

}

module.exports = Graph;