class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  //add values at the end
  append(value) {
    let node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = current.next;
    }
    this.length++;
  }

  //add value at the front
  prepend(value) {
    let node = new Node(value, this.head);
    this.head = node;
    this.length++;
  }

  //get size of the list
  getSize() {
    return this.length;
  }

  //get first node
  gethead() {
    return this.head;
  }

  //return tail value
  gettail() {
    return this.tail;
  }

  //get node at given index, 0 based
  getValue(index) {
    let current = this.head;
    if (index >= this.length || index < 0) {
      return "Invalid index value!";
    }
    while (index--) {
      current = current.next;
    }
    return current.data;
  }

  //delete the last node
  pop() {
    if (this.length === 0) {
      return "List is empty";
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.length--;
    }
  }

  //check if value exist
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.data == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  //find index of the value if exist
  find(value) {
    let current = this.head;
    let count = 0;
    while (current != null) {
      if (current.data == value) {
        return count;
      }
      current = current.next;
      count++;
    }
    return "Value not found";
  }

  //print the list in a string
  toString() {
    let current = this.head;
    while (current != null) {
      process.stdout.write(`(${current.data})->`);
      current = current.next;
    }
    console.log(`(null)`);
  }

  //insert at given value
  insertAt(index, value) {
    let node = new Node(value);
    let current = this.head;
    let prev;
    if (index >= this.length || index < 0) {
      return "Invalid index value!";
    } else if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === length - 1) {
      this.append(value);
    }
    while (index--) {
      prev = current;
      current = current.next;
    }
    prev.next = node;
    node.next = current;
    this.length++;
  }
  //remove at given index
  removeAt(index) {
    let current = this.head;
    let prev;
    if (index >= this.length || index < 0) {
      return "Invalid index value!";
    } else if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    while (index--) {
      prev = current;
      current = current.next;
    }
    if (current === this.tail) {
      this.tail = prev;
    }
    prev.next = current.next;
    this.length--;
  }
}

let list = new LinkedList();
list.append(3);
list.append(4);
list.append(5);
list.prepend(8);
list.insertAt(0, 0);
list.removeAt(4);
list.toString();
console.log(list.getSize());
console.log(list.gettail(0));
