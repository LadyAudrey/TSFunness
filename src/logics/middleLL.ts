var middleNode = function(head) {
    // counter to increment as looping through list
    let counter = 0;
    // create current node variable
    let currentNode = head
    // traverse the list to find the length
    while(currentNode){
        counter++;;
        currentNode = currentNode.next;
    }
    // do the math on counter to find the middle
    // case for odd counter
    // case for even counter
    let middleIndex;
    if(counter % 2 === 0){
        middleIndex = (counter / 2) + 1;
    } else {
        middleIndex = Math.ceil(counter / 2);
    }
    // return the appropriate middle node
    // traversal
    currentNode = head;
    let i = 1;
    
    while(currentNode){
        console.log(middleIndex, i)
        if(i === middleIndex){
            return currentNode
        }
        currentNode = currentNode.next;
        i++;
    }
}