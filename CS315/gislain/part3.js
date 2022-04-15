"use strict";
/*eslint-disable */
let Abe = {
    name: "Abe",
    children: [{
        name: "Homer",
        children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]
    }]
}

//Question 1
function printName(node) {
    if (Array.isArray(node.children)) {
        console.log(node.name);
        for (let element of node.children) {
            printName(element);
        }
    } else {
        console.log(node.name);
    }
}
//printName(Abe);

//Question 2
function contains(tree, target) {
    if (tree.name == target) {
        return true;
    } else if (Array.isArray(tree.children)) {
        for (let element of tree.children) {
            return contains(element, target);
        }
    } else {
        return false;
    }
}
//console.log(contains(Abe, "Gislain"));

//Question 3
function containingTree(tree, target) {
    if (tree.name == target) {
        return tree;
    } else if (Array.isArray(tree.children)) {
        let newTree = null;
        for (let element of tree.children) {
            if (containingTree(element, target)) {
                newTree = containingTree(element, target)
            }
        }
        return newTree;
    }
}
// console.log(containingTree(Abe, "Lisa"));

//Question 4
// function ListNode(name) {
//     this.name = name;
//     this.next = null;
// }
// const maggie = new ListNode("Maggie");
// const lisa = new ListNode("Lisa");
// lisa.next = maggie;
// const bart = new ListNode("Bart");
// bart.next = lisa;
// const homer = new ListNode("Homer");
// homer.next = bart;
// const abe = new ListNode("Abe");
// abe.next = homer;
//console.log(abe);

//Question 5
function findListNode(list, target) {
    let containingList = null;
    if (list.next == null) {
        if (list.name == target) {
            containingList = list;
        }
    } else {
        if (list.name == target) {
            containingList = list;
        } else {
            containingList = findListNode(list.next, target);
        }
    }
    return containingList;
}
//console.log(abe)
//console.log(findListNode(abe, "Gislain"));

//Question 6
function treeModifier(tree, modifierFunc) {
    if (tree.children == null) {
        modifierFunc(tree);
    } else {
        modifierFunc(tree);
        for (let element of tree.children) {
            treeModifier(element, modifierFunc);
        }
    }
    return tree;
}

function allCaps(node) {
    node.name = node.name.toUpperCase();
    return node;
}
function addStars(node) {
    node.name = "***" + node.name + "***";
    return node;
}
function reverseNode(node) {
    let newName = [];
    let arrayName = node.name.split("");
    for (let element of arrayName) {
        newName.unshift(element);
    }
    node.name = newName.join("");
    return node;
}

// console.log(treeModifier(Abe, allCaps))
// console.log(treeModifier(Abe, addStars))
// console.log(treeModifier(Abe, reverseNode))

//Question 7
let valuesArr = [];
function treeCollector(tree) {
    if (Array.isArray(tree.children)) {
        valuesArr.push(tree.name);
        for (let element of tree.children) {
            treeCollector(element);
        }
    } else {
        valuesArr.push(tree.name);
    }
    return valuesArr;
}
//console.log(treeCollector(Abe));

function ListNode(value) {
    this.name = value;
}

function generateList(root) {
    if (root.children == null || root.children.length == 0)
        return new ListNode(root.name);
    let linkedList = new ListNode(root.name);
    let list = linkedList;
    for (let eachChild of root.children) {
        list.next = generateList(eachChild);
        list = list.next;
    }
    return linkedList;
}

console.log(JSON.stringify(generateList(Abe)))