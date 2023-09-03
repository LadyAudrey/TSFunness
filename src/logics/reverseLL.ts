var reverseList = function(head) {
    // test if LL is empty or 1 in length, return head
    if(head == null || head.next == null){
        console.log(head)
        return head
    }
    let firstPointer = head;
    // create new LL
    let oldNode = new ListNode(head.val);
    let newNode = new ListNode(head.next.val, oldNode);
    firstPointer = head.next.next;
    // iterate through LL
    while (firstPointer){
        oldNode = newNode;
        newNode = new ListNode(firstPointer.val, oldNode);
        firstPointer = firstPointer.next;
    }
    return newNode
};