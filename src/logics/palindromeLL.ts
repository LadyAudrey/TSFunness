var isPalindrome = function(head) {
    // create test string
    let testArray = [];
    // loop through LL
    while(head){
        // add index vals to test string
        testArray.push(head.val);
        head = head.next
    }
    // shallow copy, reverse test string
    const reverseTestArray = Array.from(testArray);
    reverseTestArray.reverse();
    // compare reversed and OG test string
        // return boolean value
    console.log(reverseTestArray, testArray)
    for(let i = 0; i < testArray.length; i++){
        if(reverseTestArray[i] !== testArray[i]){
            return false
        }
    }
    return true;
};