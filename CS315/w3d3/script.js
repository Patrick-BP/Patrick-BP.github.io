"use strict";
/* eslint-disable */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  let email = document.getElementById("validationCustom01");
  let pass1 = document.getElementById("validationCustom02");
  let pass2 = document.getElementById("validationCustom03");
  let firstName = document.getElementById("validationCustom04");
  let lastName = document.getElementById("validationCustom05");
  let gender = document.getElementsByName("inlineRadioOptions");
  let country = document.getElementById("validationCustom06");
  let selectconditions =document.getElementsByName("agreement")[0];
  let selectnewsletter =document.getElementsByName("newsletter")[0];
  let subimtBtn = document.querySelector('button[type="submit"]');
  
  function passwordValidation(){

  }