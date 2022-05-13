"use strict";
/* eslint-disable */

window.onload = function(){
    let usernameField = document.getElementById("username");
    console.log(usernameField.value);
    let passwordField = document.getElementById("password");
    console.log(passwordField.value);
    let loginBtn = document.getElementById("loginbtn");
    console.log(loginBtn);

    let loginObj = {
        username: usernameField.value,
        password: passwordField.value
    }
    let loginJson = JSON.stringify(loginObj);
    console.log(loginJson);
    loginBtn.onclick = function(){
        fetch('http://localhost:3000/api/auth/login', {
            method: 'Post',
            body:loginJson
        }).then(res=> res.json())
        .then(data => console.log(data))      
        
    }
}