class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
    }

    addEdge(v1, v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            //unidirectional - both vertex are connected to each other
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        }
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v!=vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=> v!=vertex1);
        }
    }

    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            for(let v of this.adjacencyList[vertex]){
                this.removeEdge(vertex, v)
            }
            delete this.adjacencyList[vertex];
            console.log(this.adjacencyList)
        }
    }

    depthFirstRecursive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dsf(vertex){
            if(!vertex) return null;
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    return dsf(neighbor);
                }
            })
        })(start)
        return result;
    }

    depthFirstIterative(start){
        let stack=[start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }

    breadthFirst(start){
        let queue=[start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            console.log(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

module.exports = Graph;