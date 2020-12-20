
// Queue
// Front item .. .. .. End Item
//  Last ith  .. .. ..  End ith
//  First to Deque
//                      Last to Deque
//                      First Enqueues
//  Last Enqueued

class Queue {
 
    constructor() {
        this._queueStorage = {};
        this._queueLength = 0;
        this._head = 0;
    }

    //push an item to the end of the queue
    enqueue(value) {
        if(!value) {
            console.error(`Please insert a proper value.`);
            return false;
        }
        this._queueStorage[this._queueLength + this._head] = value; // summing up the ._head property allows it doesn't replace values when adding after removing values
        this._queueLength++;
    }

    //remove an item from the front in the queue
    dequeue() {
        if(this.isEmpty()) {
            console.log(`The Queue is empty.`);
            return false;
        }
        delete this._queueStorage[this._head++];
        this._queueLength--;
    }

    /* CHECK THIS OUT !
    peek() {
        return this._queueStorage[(this._queueLength-1)+this._head];
    } */

    //peek the very front in the queue
    peek() {
        return this._queueStorage[this._head];
    }

    //return the total of items in the queue
    size() {
        return this._queueLength;
    }

    //clear the queue
    clear() {
        this._queueStorage = {};
        this._queueLength = 0;
        this._head = 0;
    }

    //return the total items processed by the queue
    totalProcessedItemByThisQueue() {
        return this._head;
    }

    //check if our queue is empty
    isEmpty() {
        return this._queueLength === 0;
    }

}

let myQueue = new Queue;

myQueue.enqueue(); // please insert a proper value

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);


console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.size());
console.log('---------------------');

myQueue.dequeue();

console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.size());
console.log('---------------------');

myQueue.dequeue();

console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.size());
console.log('---------------------');

console.log(`The total items processed are: ${myQueue.totalProcessedItemByThisQueue()}.`);

myQueue.clear();
console.log(myQueue);

console.log(myQueue.isEmpty());