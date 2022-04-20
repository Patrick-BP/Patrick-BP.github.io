"use strict";
/* eslint-disable */

let productArray =[

    {name: "Active noise cancellation for immersive sound Transparency mode for hearing and connecting with the world around you Three sizes of soft,tapered silicone tips for a customizable fit",

  rating: 5 , price: " $203.00", image: "airpord.jpg", department: "electronic"},



    {name: "Video Camera Camcorder, Femivo 4K 48MP WiFi Vlogging Camera 16X Video Recorder with Touch Screen IR Night Vision YouTube Camera with Mic,Stabilizer, Lens Hood, Remote Control, Battery Charger",

rating: 4, price: "$151.99", image: "camera_.jpg", department: "electronic"},



{name: "4DV4 Drone with 1080P Camera for Adults, HD FPV Live Video RC Quadcopter Helicopter for Beginners Kids Toys Gifts,2 Batteries and Carrying Case,Altitude Hold,Waypoints,3D Flip,Headless Mode ",

  rating: 5, price: "$80.99 ", image: "drone_.jpg", department: "electronics"},



{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  

rating: 3, price: "$1,594.00 ", image: "imac.jpg", department: "electronics"}

];

function displayProduct(arr){}
function sortHightToLow(arr){}
function sortLowToHight(arr){}

function sortByRatings(arr){
    let newarr = arr.sort((a, b)=>b.rating - a.rating );
    return newarr;
}
//console.log(sortByRatings(productArray))

function filterButton(arr){
    let newArr = arr.filter(item => item.department === "electronic");
    return newArr
}
//console.log(filterButton(productArray));

function addToCart(){}