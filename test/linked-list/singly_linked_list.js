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

    removeHead() {
        let value =  this.head.value;
        this.head = this.head;

        return value;
    }

    removeTail() {
        let value = this.tail.value;
        this.tail = this.tail.next;

        return value;
    }

    search(value) {
        let current = this.tail;

        while(current) {
            if(current.value === value) {
                return value;
            }
            current = current.next;
        }
        return null;
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

    it("Should add value to tail", () => {
        const linkedList = new LinkedList();
        linkedList.addToTail(2);
        linkedList.addToTail(1);

        assert.equal(linkedList.tail.value, 1);
        assert.equal(linkedList.tail.next.value, 2);
        assert.equal(linkedList.head.value, 2);
        assert.equal(linkedList.head.next, null);
    });

    it("Should add value to head and tails", () => {
        const linkedList = new LinkedList();
        linkedList.addToHead(2);
        linkedList.addToTail(1);
        linkedList.addToHead(3);

        assert.equal(linkedList.tail.value, 1);
        assert.equal(linkedList.tail.next.value, 2);
        assert.equal(linkedList.tail.next.next.value, 3);
        assert.equal(linkedList.head.value, 3);
        assert.equal(linkedList.head.next, null);
    });

    it("Should search for value", () => {
        const list = new LinkedList();
        list.addToHead(1);
        list.addToHead(2);
        list.addToHead(3);
        assert.equal(list.search(1), 1);
        assert.equal(list.search(2), 2);
        assert.equal(list.search(3), 3);
        assert.equal(list.search(4), null);
    });
});