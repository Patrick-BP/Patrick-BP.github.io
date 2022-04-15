// ===================================part 3 Question 1 ====================== NOT WORKING


// let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};



// function findNames(obj){
// if(typeof obj  === "object"){
  
//         console.log(obj.name)
   
// }

// if(Array.isArray(obj.children)){
//     obj.children.forEach(element => {
//                 findNames(element); 
//             });
//         }
        
//    }
//   console.log(findNames(nodeObj)) 


// ===================================part 3 Question 2 ====================== NOT WORKING


// let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};



// function findNames(obj, target){
// if(typeof obj  === "object"){
//     if(obj.name === target){
//         console.log("true")
//     }else{
//         console.log(obj.name)
//     }
   
// }

// if(Array.isArray(obj.children)){
//     obj.children.forEach(element => {
//                 findNames(element); 
//             });
//         }
        
//    }
//   console.log(findNames(nodeObj, "Lisa")) 


// ===================================part 3 Question 4 ====================== 
// let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};
// function ListNode(obj){

// }

// let newObj = {name: "Abe", next: {name: "Homer", next: {name: "Bart", next:{ name: "Lisa", next:{name: "Maggie"}}}}}; 


//Question1
// function printName(node) {
//     for (let key in node) {
//         if (Array.isArray(node[key])) {
//             node[key].forEach(element => {
//               return printName(element)
//             });
//         } else {
//            console.log(node[key]) ;
//         }
//     }
// }

//  console.log(printName(Abe));


// function findTarget(node, target) {
//     if (Array.isArray(node.children)) {
//         for (let key in node.children) {
//             findTarget(key)
//         }
//         if(node.name == target){
//             return true;
//         }else{
//             return false;
//         }   
//     } else {
//         if(node.name == target){
//             return true;
//         }else{
//             return false;
//         }
        
//     }

// }
// findTarget(Abe, "Lisa");










// function ListNode(node) {
//     let obj = {};
//     if (node.children == null) {
        
//         obj.next = { name: node.name, next: null };
// } else {
//     obj.name = node.name;
//     obj.next = node.next
//     for (let element of node.children) {
//         ListNode(element);
        
//     }
// }
// return obj;
// }

// let Abe = {name: "Abe",children: [{name: "Homer",children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]}


// let newObj = ListNode(Abe);console.log(newObj);
