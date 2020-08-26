// //  Detect a loop in cyclic/circular linked list

// let chai = require('chai');

// const { assert } = chai;


// class Node {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addToHead(value) {
//         const node = new Node(value, null);
//         if (this.head) {
//             this.head.next = node;
//         } else {
//             this.tail = node;
//         }
//         this.head = node;
//     }

//     addToTail(value) {
//         const node = new Node(value, this.tail);
//         if (!this.tail) {
//             this.head = node;
//         }
//         this.tail = node;
//     }

//     addToTail(value) {
//         const node = new Node(value, this.tail);
//         if(!this.head) {
//             this.head = node;
//         }
//         this.tail = node;
//     }
    

//     hasLoop() {
//         let p1, p2;
//         p1 = this.head;
//         p2 = this.head;
      
//         // basic condition for loop to exist
//         while (p2.next.next) {
//           // console.log('P1 = %d, P2 = %d', p1.data, p2.data);
//           p1 = p1.next;
//           p2 = p2.next.next;
      
//           if (p1 == p2) {
//             return true;
//           }
//         }
//         return false;
//     };
// }


// describe("Detect Loop in Linked List", () => {
//     let L1 = new LinkedList();
//     let testData = [1,2,3,4,5,6];
//     testData.forEach(el => L1.addToTail(el));

//     console.log(L1);

//     it("Should detect loop in linked list", () => {
//          // Create a circular linked list
//         L1.head.next.next.next.next.next.next = L1.head.next.next;
//         assert.equal(L1.hasLoop(), true);
//     });

//     it("Should not detect loop in linked list", () => {
//         // Remove circular dependency
//         L1.head.next.next.next.next.next.next = null;
//         assert.equal(L1.hasLoop(), false);
//     });
// });