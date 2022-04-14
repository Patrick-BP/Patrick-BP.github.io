"use strict";
/* eslint-disable */

let email = document.getElementsByName("email")[0];
  let pass1 = document.getElementById("validationCustom02");
  let pass11 = document.getElementsByName("pass")[0];
  let pass2 = document.getElementById("validationCustom03");
  let firstName = document.getElementsByName("firstname")[0];
  let lastName = document.getElementsByName("lastname")[0];
  let gender = document.getElementsByName("inlineRadioOptions");
  let country = document.getElementsByName("validationCustom06");
  let selectconditions = document.getElementsByName("agreement")[0];
  let selectnewsletter = document.getElementsByName("newsletter")[0];
  let subimtBtn = document.querySelector('button[type="submit"]');


window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(window.location.search);
    console.log(urlParams);
    if(urlParams.entries().length==0)
        return;
    email.value = urlParams.get('email');
    firstName.value =  urlParams.get('firstname');
    lastName.value =  urlParams.get('lastname');
    selectconditions.value =  urlParams.get('agreement');
    selectnewsletter.value = urlParams.get('newsletter');
    


    
    if(urlParams.get('select').length==0)
        return;
    for(let eachOption of document.getElementsByName("select")[0].options){
        if(urlParams.get('select').split(",").includes(eachOption.value))
            eachOption.selected= true;
        else
            eachOption.selected= false;
    }
});



// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
//    if(!passwordValidation()){
//             event.preventDefault()
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated')
         
          
//         }, false)
//       })
      
//   })()

  
  
//   function passwordValidation(){
//     if(pass1.value !== pass2.value){
//         alert ("Please enter confirm password");
//         pass2.value = "";
//         return false;
//     }
//     return true;

//   }