"use strict";
/* eslint-disable */
window.onload = function(){
    let wrapper = document.getElementById("wrapper");
     document.getElementById("btn").onclick = function(){
        wrapper.innerHTML = "";
        fetch(`https://randomuser.me/api/?results=3`)
.then(res => res.json())
.then(data => {
    data.results.forEach(element => {
        console.log(element)
         let temp = `<div id="container" class="container d-flex border-top justify-content-between pt-4 mb-4 ">
        <div><img src="${element.picture.large}" class="p-4" alt=""></div>
        <div class="text-end align-middle fs-5">
        <div class="fw-bold"> ${element.name.first} ${element.name.last}</div>
        <div>phone: ${element.phone} </div>
        <div> ${element.email}</div> 
        </div>
        </div>` ;
        wrapper.innerHTML += temp;
    });

})
    };
    
fetch(`https://randomuser.me/api/?results=3`)
.then(res => res.json())
.then(data => {
    data.results.forEach(element => {
        console.log(element)
         let temp = `<div id="container" class="container d-flex border-top justify-content-between pt-4 mb-4 ">
        <div><img src="${element.picture.large}" class="img-thumbnail " alt=""></div>
        <div class="text-end align-middle fs-5">
        <div class="fw-bold"> ${element.name.first} ${element.name.last}</div>
        <div>phone: ${element.phone} </div>
        <div> ${element.email}</div> 
        </div>
        </div>` ;
        wrapper.innerHTML += temp;
    });
 
})
}
