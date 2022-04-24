const { expect } = require('chai');
let chai = require('chai');

const { assert } = chai;


class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        let node = new Node(value, null);
        if (this.head) {
            this.head.next = node;
        } else {
            this.tail = node;
        }
        this.head = node;
    }

    addToTail(value) {
        let node = new Node(value, this.tail);
        if (this.tail) {
            
        } else {
            this.head = node;
        }
        this.tail = node;
    }
}


describe("Singly Linked List", () => {
    it("Should add value to head", () => {
        const linkedList =  new LinkedList();
        linkedList.addToHead(1);
        linkedList.addToHead(2);

        assert.equal(linkedList.head.value, 2);
        assert.equal(linkedList.head.next, null);
        assert.equal(linkedList.tail.value, 1);
        assert.notEqual(linkedList.tail.next, null);
        assert.equal(linkedList.tail.next.value, 2);
    });
});