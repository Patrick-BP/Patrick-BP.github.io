"use strict";
/* eslint-disable */

function TreeNode(value) {

    this.value = value;

    this.descendents = [];

}

const flowers = new TreeNode('flowers');

const subtropicalFlowers = new TreeNode('subtropicalFlowers');

const temperateFlowers = new TreeNode('temperateFlowers');

const bouganvillea = new TreeNode('bougainvillea');

const roses = new TreeNode('roses');

const daffodils = new TreeNode('daffodils');

// associate root with is descendents

flowers.descendents.push(subtropicalFlowers);

flowers.descendents.push(temperateFlowers);

subtropicalFlowers.descendents.push(bouganvillea);

temperateFlowers.descendents.push(roses);

temperateFlowers.descendents.push(daffodils);



function flatternTree(tree){
    let arr = [{name: tree.value, children: tree.descendents.length}];

    for (const child of tree.descendents) {
       arr = arr.concat(flatternTree(child)) 
    }
    return arr;
}
console.log(flatternTree(flowers))


function countLeaves(tree){
    let count = 0;
    if(tree.descendents.length == 0){
        count++;
    }
    for (const child of tree.descendents) {
      count +=  countLeaves(child);
        
    }
    return count;
}
console.log(countLeaves(flowers))