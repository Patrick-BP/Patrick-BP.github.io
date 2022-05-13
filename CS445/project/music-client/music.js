"use strict";
/* eslint-disable */

window.onload = function () {
    let loginBtn = document.getElementById("loginbtn");

    loginBtn.onclick = function () {
        let usernameField = document.getElementById("username").value;
        let passwordField = document.getElementById("password").value;
        
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameField,
                password: passwordField
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json())
            .then(data => {
                if (data.status === "error") {
                    invalidLogin(data);
                } else {
                    sessionStorage.getItem('tokenLogin', data.accessToken );
                    fetchMusic();
                    fetchPlayList();
                }
            })


    }
}

function invalidLogin(msg){
    let warning = document.getElementById("msg");
    warning.innerHTML = msg.message;
}

function fetchMusic(){}
function fetchPlayList(){}