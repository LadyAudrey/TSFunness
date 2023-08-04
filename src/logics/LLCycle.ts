class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
  }
  
  class Node {
    constructor(item, next) {
      this.value = item;
      this.next = next;
    }
  }
  
  const newNode = new Node(1);
  const newNode1 = new Node(2, newNode);
  const newNode2 = new Node (3, newNode1)
  const newLL = new LinkedList(newNode1);
  console.log(newLL);
  

var hasCycle = function(head) {
    let num = head;
    const contains = new Set();
    while(num){
        if(contains.has(num)){
            return true
        }
        contains.add(num)
        num = num.next
    }
    return false
};

console.log(hasCycle(newNode1))