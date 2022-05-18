"use strict";
/* eslint-disable */

// Array.prototype.newReverse = function(){
   
//   let  arr = this;
//      console.log(arr.reverse()); 

// };

// Array.prototype.newReverse = async function(){
//     let  arr = this;
//       let response = await arr.reverse(); 
//   console.log(response);
//   };

// Array.prototype.newReverse =function(){ 
//     let  arr = this;
// new Promise(function(resolve, reject){
//  resolve(arr.reverse())
// }).then(console.log);

// } 
// console.log('start');
// [1, 3, 6, 2].newReverse();
// console.log('end');

// Code starts
// promise starts
// code ends
// setTimeout results

// setTimeout(() => console.log('setTimeout results'), 0);//6
// console.log('Code starts');//1

// async function foo(){
//     console.log('something else');
// let re = await new Promise((resolve) => {
//  console.log('Promise starts');//2
//  resolve(`Promise results`);
//  console.log('object');//3
// });
// let re2 = await re;
// console.log(re2);//5
// }

// console.log('Code ends');//4

// foo();

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve('p1 resolved');
//     }, 1000);
//    });
//    const p2 = data => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${data}, p2 resolved`, 1000));
//    });

//    p1.then(data => p2(data)).then(result =>
//     console.log(result));

// const products = `[
//     {"ID":"1", "name":"ipad","price":"150.99"}
// ]`

// console.log(JSON.parse(products)); ;

function calcuTotalPrice(category){
 let totalPrice=0;
 fetch('http://www.example.com/shoppingcart')
 .then(res => res.json())
 .then(data =>{
     data.cart.forEach(element => {
        totalPrice += element.price * element.quatity;
        console.log(totalPrice);
     });
 })
}


fetch('http://www.example.com/shoppingcart')
 .then(res => res.json())
 .then(data =>{
     
       let av = data[0].courses.reduce((sum, current)=> sum+ current) / element.length
   
 })


 fetch('http://www.example.com/grade?studentId=1&courseId=201',{
     method:'POST',
     headers:{
         'content-type':'application/json'
     }
 })
 .then(res => res.json())
 .then(data =>{
     data.forEach(element=>{
         console.log(JSON.stringify({name:element.name, avarageGrade:element.grade}));

     })
     

   
 })