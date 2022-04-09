
let sourceArr = [];
let destArr = [];
let sourceEl = document.getElementById("sourceEl");
let destEl = document.getElementById("destinationEl");

        window.onload = function(){
            sourceData(sourceArr);
            destinationData(destArr);
       
        }
        
       
function sourceData(arr){
  sourceEl.innerHTML = "";
  arr.forEach(function(element){
    let newOption = document.createElement("option");
    newOption.innerHTML = element
    sourceEl.append(newOption);
  });
  
}



function destinationData(arr){
  destEl.innerHTML ="";
  arr.forEach(function(element){
    let newOption = document.createElement("option");
    newOption.innerHTML = element
    destEl.append(newOption);
  });

}




let inputField = document.getElementById("input");
let addbtn = document.getElementById("addbtn");

addbtn.onclick = addPlants;

function addPlants(){
    sourceArr.push(inputField.value);
    
    sourceData(sourceArr);

   
}

let sendToDestBtn = document.getElementById("todestbtn");
let sendToSourceBtn = document.getElementById("tosourcebtn");

sendToDestBtn.onclick = sendItemToDest
sendToSourceBtn.onclick = sendItemToSource

function sendItemToDest(){
   for (const option of sourceEl.children) {
       console.log(sourceEl.children)
       if(option.selected){
        let index = sourceArr.indexOf(option.innerText);
        destArr.push(sourceArr[index]);
        sourceArr.splice(index, 1);

        sourceData(sourceArr);
        destinationData(destArr);
        
       }
   } 
}

function sendItemToSource(){
    for (const option of destEl.children) {
        console.log(destEl.children)
        if(option.selected){
         let index = destArr.indexOf(option.innerText);
        sourceArr.push(destArr[index]);
         destArr.splice(index, 1);
        
        
         sourceData(sourceArr);
         destinationData(destArr);
         
        }
    } 
 }

let sortBtn = document.getElementById("sort");
sortBtn.onclick = sortItems;

function sortItems(){
    let newsource = sourceArr.sort((a, b)=>{
        if(a > b){return 1 ;}
        else if(a < b){return -1;}
        else{return 0;}
    });
sourceData(newsource);

    let newdest = destArr.sort((a, b)=>{
        if(a > b){return 1 ;}
        else if(a < b){return -1;}
        else{return 0;}
    });

 destinationData(newdest);
}