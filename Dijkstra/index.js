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

    Dijkstra(start, finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        const path =[]
        let smallest
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            console.log('Smallest:', smallest)
            if(smallest === finish){
                console.log('Finish:', smallest)
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest]
                }
                break;
            }
            if(smallest || distances[smallest]!== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let calculate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    console.log(nextNeighbor);
                    if(calculate < distances[nextNeighbor]){
                        distances[nextNeighbor] = calculate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, calculate);
                    }
                }
            }
        }
    }

}

module.exports = Graph;