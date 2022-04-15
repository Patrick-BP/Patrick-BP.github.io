"use strict";
/*eslint-disable */
function sumTo(n) {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i
    }
    return result;
}

function sumToRec(n) {
    if (n == 1)
        return 1;
    else
        return n + sumTo(n - 1);
}

function factorial(n) {
    if (n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

function fib(n) {
    if (n <= 1)
        return n
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList(list) {
    while (list != null) {
        console.log(list.value);
        list = list.next;
    }
}

function printListRec(list) {
    if (list == null)
        return;
    else {
        console.log(list.value)
        printListRec(list.next);
    }

}

function reversePrintList(list) {
    let array = []
    let newlist = list;
    while (newlist != null) {
        array.push(newlist.value);
        newlist = newlist.next;
    }
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }

}

function reversePrintListRec(list) {
    if (list.next) {
        reversePrintListRec(list.next);
    }
    console.log(list.value);
}
reversePrintList(list);