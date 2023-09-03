var detectCycle = function(head) {
    if(head === null || head.next === null){
        return null;
    }
    // variables to hold pointers
    let slow = head;
    let fast = head;
    // loop through LL with 2 pointers
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        // if the pointers are equal, we have a cycle
        if(slow == fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};