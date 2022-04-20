"use strict";
/*eslint-disable*/

let productArray =[
    {name: "Active noise cancellation for immersive sound Transparency mode for hearing and connecting with the world around you Three sizes of soft,tapered silicone tips for a customizable fit",
  rating: 5 , price: " $203.00", image: "airpord.jpg", department: "electronic"},

    {name: "Video Camera Camcorder, Femivo 4K 48MP WiFi Vlogging Camera 16X Video Recorder with Touch Screen IR Night Vision YouTube Camera with Mic,Stabilizer, Lens Hood, Remote Control, Battery Charger",
rating: 4, price: "$151.99", image: "camera.jpg", department: "electronic"},

{name: "4DV4 Drone with 1080P Camera for Adults, HD FPV Live Video RC Quadcopter Helicopter for Beginners Kids Toys Gifts,2 Batteries and Carrying Case,Altitude Hold,Waypoints,3D Flip,Headless Mode ",
  rating: 5, price: "$80.99 ", image: "drone.jpg", department: "electronic"},

{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 4, price: "$1,594.00 ", image: "imac.jpg", department: "electronic"},
{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 3, price: "$1,594.00 ", image: "imac.jpg", department: "electronic"},
{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 2, price: "$1,594.00 ", image: "imac.jpg", department: "electronic"},
{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 1, price: "$1,594.00 ", image: "imac.jpg", department: "electronic"},
{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 5, price: "$1,594.00 ", image: "imac.jpg", department: "electronic"},
{name: "Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed), Stereo speakers, Dual microphones, Headphone port. ",  
rating: 4, price: "$1,594.00 ", image: "imac.jpg", department: "electronic"}
];

/*<div class="box1 product">
<img src="images/airpord.jpg">
<p>Active noise cancellation for immersive sound
    Transparency mode for hearing and connecting
    with the world around you Three sizes of soft,
    tapered silicone tips for a customizable fit</p>
    <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<p>$203.00</p>

</div>*/

let dept = document.getElementsByClassName("product")[0];
console.log(dept)


function displayProduct(arr){
    for(let element of arr){
      
        let newproduct= document.createElement("div");
        newproduct.className ="box2 products";

        newproduct.innerHTML =`<img src='images/${element.image}'> 
        <a href="#"><p style='font-size:13px'>${element.name}</p></a>
        <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span>
       <span class='fa fa-star checked'></span> - ${element.rating}
       <p style='font-weight:bold'>${element.price} </p>`;
       dept.append(newproduct);
    }
  

}
displayProduct(productArray);




