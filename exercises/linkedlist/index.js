// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }



  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0
    let node = this.head
    while(node) {
      count++
      node = node.next
    }
    return count;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    while(node) {
      if(!node.next) {
        return node
      }
      else {
        node = node.next
      }
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head.next || null;
  }

  removeLast() {
    if(!this.head) {
      return
    }
    if(!this.head.next) {
      this.head = null
      return
    }
    let node = this.head.next
    let prev = this.head
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if(last) {
      last.next = new Node(data)
    }
    else {
      this.head = new Node(data)
    }
  }

  getAt(idx) {
    let count = 0;
    let node = this.head
    while(node) {
      if(count === idx) {
        return node
      }
      else {
        node = node.next
        count++
      }
    }
    return null;
  }

  removeAt(idx) {
    if(this.head === null) {
      return
    }
    if(idx === 0) {
      this.head = this.head.next
      return
    }

    let prev = this.getAt(idx-1)
    if(prev.next) {
      prev.next = prev.next.next
    }
  }
}

module.exports = { Node, LinkedList };
