// Queues are just arrays with two primary operations: unshift and pop. Unshift enqueues items to the end of the array, while Pop dequeues them from the beginning of the array. In other words, Queues follow the “First In, First Out” protocol (FIFO). If the direction is reversed, we can replace unshift and pop with push and shift, respectively.


let chai = require('chai');

const { assert } = chai;

class Queue {
    constructor(...items) {
        this.reverse = false;
        this.queue = [...items];
    }

    enqueue(...items) {
        return this.reverse
            ? this.queue.push(...items)
            : this.queue.unshift(...items);
    }

    dequeue() {
        return this.reverse ? this.queue.shift() : this.queue.pop();
    }
}

describe("Queues", () => {
    it("Should enqueue items to the left", () => {
        const queue = new Queue(4, 5);
        assert.equal(queue.enqueue(1, 2, 3), 5);
        assert.deepEqual(queue.queue, [1, 2, 3, 4, 5]);
    });

    it("Should enqueue items to the right", () => {
        const queue = new Queue(4, 5);
        queue.reverse = true;
        assert.equal(queue.enqueue(1, 2, 3), 5);
        assert.deepEqual(queue.queue, [4, 5, 1, 2, 3]);
    });

    it("Should dequeue item from the right", () => {
        const queue = new Queue(1, 2, 3);
        assert.equal(queue.dequeue(), 3);
    });

    it("Should dequeue item from the left", () => {
        const queue = new Queue(1, 2, 3);
        queue.reverse = true;
        assert.equal(queue.dequeue(), 1);
    });
});