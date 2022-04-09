"use strict";
/* eslint-disable */
// function scotland() {
//     let aberdeen = {
//         origin: true,
//         expression: function () {
//             console.log(this);
//         }
//     };

//     let innerFn = aberdeen.expression;
//     innerFn();
//     aberdeen.expression();
// }
// scotland()

// function countdown(from) {
//     let count = from - 1;
//     let timerId = setInterval(function () {
//     if (count >= 0) {
//     console.log(count);
//     count--
//     } else {
    
//     clearInterval(timerId);
    
//     }
    
//     }, 1000);
    
//     return from;
// }
// console.log(countdown(2))

// function makeSecureStack(){
// let arr = [];
//     return function(element, operation){
//         if(operation === "push"){
//             arr.push(element);
//             return;
//         }else if(operation === "pop"){
//             return arr.pop();
//         }else if(operation === "view"){
//             let arr2=[...arr]
//           return arr2 ;

//         }
//     };
// }
// const secure = makeSecureStack();

// secure(1, "push");
// secure(2, "push")
// secure(3, "push")

// console.log("expect3:", secure(null, "pop"));
// console.log("expect undefined:", secure(55, "push"));
// console.log("expect [1,2,55]:", secure(null, "view"));


// function Incrementer(start){
//     this.value = start;
//    this.inc = function(amt){
//       return  this.value += amt; 
//     };
//   this.dec = function (amt){
//      return   this.value -= amt;
//     };

// }

// let incremente = new Incrementer(100);
// console.log(incremente.inc(10))



// function Sensor(id, name, type,manufacturer,events){
// this.id = id;
// this.name = name;
// this.type = type;
// this.manufacturer = manufacturer;
// this.events = events;
// }
// let frontDoor = new Sensor(1," Front Door Sensor" ,34, "Climax", [{time: 100, name:"Door Closed"}, {time: 101,name:"Door opened"}]);
// let motionSensor = new Sensor(2, "Motion Sensor", 43,"NYCE", [{time: 100,name:" Motion Detected"}]);
// let porticoLight = new Sensor(3, "Portico Light" ,54, "Osram" ,[{time: 100,name:"Light off"}]);
// let mainEntrance = new Sensor(4, "Main Entrance", 34, "Climax", [{time: 100, name: "EM Door Closed"}]);
// let list = [frontDoor,motionSensor, porticoLight, mainEntrance]; //,lightBulb]

// function findSensordbyType(arr, num){
//     let findsensor = arr.filter(item => item.type == num)
// return findsensor;
// }



function collectManufacturers(list){
let arr =[];
    for (const elm of list) {
        if (!arr.includes(elm.manufacturer ) ){
                arr.push(elm.manufacturer);
        }        
        
    }
return arr;
}

console.log( collectManufacturers(list))


// function getLastEventoSencor(arr, id){

//     let find = arr.find(item => item.id);
//     let temp = 0;
//     for (const elem of find.events) {
//         if(elem.time > temp){
//             temp = elem.time
//         }
//     }
//     let largest = find.events.find(item => item.time === temp)
   
// return largest;
// }
// console.log( getLastEventoSencor(list, 1))


