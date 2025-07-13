import Node from './Node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    }

    else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  pop() {
    let currentNode = this.head;
    let prevNode;
    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = null;
    return currentNode;
  }

  size() {
    let size = 1;
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; ++i) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value.localeCompare(value, undefined, {sensitivity: 'accent'}) === 0) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index= 0;
    while (currentNode !== null) {
      if (currentNode.value.localeCompare(value, undefined, {sensitivity: 'accent'}) === 0) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      return "null";
    }

    let outputString = "";
    let currentNode = this.head;

    while (currentNode !== null) {
      outputString += `( ${currentNode.value} ) -> `
      currentNode = currentNode.nextNode;
    }

    outputString += `null`
    return outputString;
  }

  insertAt(index, value) {
    if (this.size() < index){
      this.append(value);
    }
    else if (index === 0) {
      this.prepend(value);
    }

    else {
      let newNode = new Node(value);
      let currentNodeAtPreviousIndex = this.at(index-1);
      let currentNodeAtIndex = this.at(index);

      newNode.nextNode = currentNodeAtIndex;
      currentNodeAtPreviousIndex.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (index <= this.size()) {
      let currentNodeAtPreviousIndex = this.at(index - 1);
      currentNodeAtPreviousIndex.nextNode = this.at(index + 1);
    }
  }
}

export default LinkedList;