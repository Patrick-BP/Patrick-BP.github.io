

"use strict";
/* eslint-disable */

window.onload = function () {

    if (sessionStorage.getItem('tokenLogin')) {
        loggedin();
        fetchMusic();
        fetchPlayList();
    } else {
        logout();
    }
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
                    sessionStorage.setItem('tokenLogin', data.accessToken);
                    loggedin();
                    fetchMusic();
                    fetchPlayList();
                }
            })


    };

    document.getElementById("logout").onclick = logout;
    document.getElementsByClassName("searchBtn")[0].onclick = searchsong;

}


function invalidLogin(msg) {

    let warning = document.getElementById("msg");
    warning.innerHTML = msg.message;
    // document.getElementById("username").value = "";
    // document.getElementById("password").value= "";
}
function loggedin() {

    document.getElementById("loginwrapper").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("search").style.display = "block";
    document.getElementsByClassName("welcome")[0].style.display = "none";
    document.getElementsByClassName("tableContent")[0].style.display = "block";
    document.getElementById("playlist").style.display = "inline-table";

}
function logout() {
    sessionStorage.removeItem('tokenLogin');
    document.getElementById("loginwrapper").style.display = "";
    document.getElementById("logout").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementsByClassName("welcome")[0].style.display = "block";
    document.getElementsByClassName("tableContent")[0].style.display = "none";

}

function fetchMusic() {

    fetch('http://localhost:3000/api/music', {
        headers: {
            'Authorization': `Bear ${sessionStorage.getItem('tokenLogin')}`
        }
    }).then(res => res.json())
        .then(data => {
            let id = 1;
            let tbody = document.getElementById("tbody");
            tbody.innerHTML = " ";
            data.forEach(element => {
                let tr = `<tr>
                        <td>${id}</td>
                        <td>${element.title}</td>
                        <td>${element.releaseDate}</td>
                        <td>
                            <div class="plusbtn" data-music="${element.id}" onclick="addfunc(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>
                            
                        </td>
                        </tr>`;
                tbody.innerHTML += tr;
                ++id;

            });

           
        })
}


function fetchPlayList() {

    fetch('http://localhost:3000/api/playlist', {
        headers: {
            'Authorization': `Bear ${sessionStorage.getItem('tokenLogin')}`
        }
    }).then(res => res.json())
        .then(data => {
            document.getElementById("playlist").style.display = "intial";
            if (!data.length == 0) {

                document.getElementById("tbody2").innerHTML = " ";
                document.getElementsByClassName("playlistTable")[0].style.display = "block";
                document.getElementById("noplaylist").style.display = "none";
                data.forEach(element => {

                    displayplaylistTable(element);

                });

            } else {
                document.getElementsByClassName("playlistTable")[0].style.display = "none";
                document.getElementById("noplaylist").style.display = "block";
            }

        });
}


function searchsong() {
    let searchinput = document.getElementById("searchField");
    fetch(`http://localhost:3000/api/music?search=${searchinput.value}`, {
        headers: {
            'Authorization': `Bear ${sessionStorage.getItem('tokenLogin')}`
        }
    }).then(res => res.json())
        .then(data => {
            let id = 1;
            let tbody = document.getElementById("tbody");
            tbody.innerHTML = " ";
            data.forEach(element => {

                displayMusicTable(element);

                ++id;
            });
            searchinput.value = "";
        })
}

function addfunc(obj) {
    document.getElementById("playlist").style.display = " ";
    let tbody2 = document.getElementById("tbody2");
    tbody2.innerHTML = "";
    let id = obj.getAttribute("data-music");
    tbody2.innerHTML = "";
    fetch('http://localhost:3000/api/playlist/add', {
        method: 'POST',
        body: JSON.stringify({
            songId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(function (element) {
                displayplaylistTable(element);
            });
        })
}



function deletefunc(obj) {
    let tbody2 = document.getElementById("tbody2");
    let id = obj.getAttribute("data-playlist");
    tbody2.innerHTML = "";
    fetch('http://localhost:3000/api/playlist/remove', {
        method: 'POST',
        body: JSON.stringify({
            songId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
        }
    }).then(res => res.json())
        .then(data => {
            data.forEach(function (element) {
                displayplaylistTable(element);
            });
        })

}

function displayMusicTable(element) {
    let id = 1;
    let tr = `<tr>
        <td>${id}</td>
        <td>${element.title}</td>
        <td>${element.releaseDate}</td>
        <td>
        
                            <div class="plusbtn" data-music="${element.id}" onclick="addfunc(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>
                            
                        
        </td>
        </tr>`;
    tbody.innerHTML += tr;
    ++id;
}

function displayplaylistTable(element) {
    let tr2 = `<tr>
        <td>${element.orderId}</td>
        <td>${element.title}</td>
        
        <td>
            <span class="deletebtn" data-playlist="${element.songId}" onclick="deletefunc(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path
                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
            </span>&ensp;
            <span class="playbtn" data-play="${element.songId}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg></span>
                    </td>
        </tr>`;
    document.getElementById("tbody2").innerHTML += tr2;
}

