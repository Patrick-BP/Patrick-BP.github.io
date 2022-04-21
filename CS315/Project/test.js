"use strict";
/* eslint-disable */
let shoppingcardArr= JSON.parse(localStorage.getItem("cart"));
console.log(" I am here ", shoppingcardArr);
function addtocardfunc(){
    if(names){shoppingcardArr.push({name: names, price: price, image: image});
    
    localStorage.setItem("cart",JSON.stringify(shoppingcardArr));
    console.log(" Here I am inside addtoCart")
    totalPrice = shoppingcardArr.reduce((sum, current)=>sum + current.price,0);}}


let shoppingCart = [{name: 'Arducam 4K USB Camera Bundle, 12MP IMX477 HQ Webca…Mount Lens, Metal Enclosure, Tripod and USB Cable', price: 194, image: 'camera.jpg'}, {name: 'Active noise cancellation for immersive sound Tran…soft,tapered silicone tips for a customizable fit', price: 203, image: 'airpord.jpg'}];
if(localStorage.getItem("cart")==null){
    console.log(" I a m here ")
localStorage.setItem("cart",JSON.stringify(shoppingCart));
}


