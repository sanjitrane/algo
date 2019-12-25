class MaxBinaryHeap{
    constructor(){
        this.values=[];
    }

    insert(val){
        this.values.push(val);
        this.bubbleUp()
    };

    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[idx] = parent;
            this.values[parentIdx] = element;
            idx = parentIdx;
        }
    }

    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
        }
        this.sinkDown()
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[idx];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let left, right, swap = null;
            if(leftChildIdx < length){
                left = this.values[leftChildIdx];
                if(left > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                right = this.values[rightChildIdx]
                if((!swap && right > element) || (swap && right > left)){
                    swap = rightChildIdx;
                }
            }

            if(!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

module.exports={MaxBinaryHeap};