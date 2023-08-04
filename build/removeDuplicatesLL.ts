var deleteDuplicates = function(head) {
    let currentNode = head;
    let pastNode;
    while(currentNode){
        // code for firt time through
        if(pastNode === undefined){
            pastNode = currentNode;
            currentNode = currentNode.next;
            continue
        }
        // test if current node is the same as last
        if(currentNode.val === pastNode.val){
            if(currentNode.next === null){
                pastNode.next = null
                return head
            }
            // if it is, set pastNode.next to cur.next
            pastNode.next = currentNode.next;
            currentNode = currentNode.next;
            continue
        }
        pastNode = currentNode;
    }
    return head
};