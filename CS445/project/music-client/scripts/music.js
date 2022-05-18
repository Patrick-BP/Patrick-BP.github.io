

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

    // ============================================ LOGIN =======================================
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

// ============================================ END LOGIN =======================================

// ============================================ INVALID LOGIN =======================================
function invalidLogin(msg) {

    let warning = document.getElementById("msg");
    warning.style.display = "block";
    warning.innerHTML = msg.message;
    document.getElementById("username").value = "";
    document.getElementById("password").value= "";
}
// ============================================ END INVALID LOGIN =======================================


// ============================================ AFTER LOGIN =======================================
function loggedin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value= "";
    document.getElementById("msg").style.display = "none";
    document.getElementById("loginwrapper").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("search").style.display = "block";
    document.getElementsByClassName("welcome")[0].style.display = "none";
    document.getElementsByClassName("tableContent")[0].style.display = "block";
    document.getElementById("playlist").style.display = "inline-table";

    
    

}
// ============================================ END AFTER LOGIN =======================================



// ============================================ AFTER LOGOUT =======================================
function logout() {
    
    sessionStorage.removeItem('tokenLogin');
    document.getElementById("loginwrapper").style.display = "";
    document.getElementById("logout").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementsByClassName("welcome")[0].style.display = "block";
    document.getElementsByClassName("tableContent")[0].style.display = "none";

}
// ============================================ END AFTER LOGOUT =======================================



// ============================================ FETCH TO MUSIC TABLE=======================================
function fetchMusic() {

    fetch('http://localhost:3000/api/music', {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
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

// ============================================ END FETCH TO MUSIC TABLE=======================================



// ============================================ FETCH  MUSIC TO PLAYLIST TABLE=======================================
function fetchPlayList() {
    
    fetch('http://localhost:3000/api/playlist', {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
        }
    }).then(res => res.json())
        .then(data => {
            
          
            document.getElementById("playlist").style.display = "intial";
            if (!data.length == 0) {
                document.getElementsByClassName("player")[0].style.display = "block";
                document.getElementById("tbody2").innerHTML = " ";
                document.getElementsByClassName("playlistTable")[0].style.display = "block";
                
                data.forEach(element => {
                 document.getElementById("noplaylist").style.display = "none";
                    displayplaylistTable(element);

                });

               
            } else {
                document.getElementsByClassName("playlistTable")[0].style.display = "none";
                document.getElementById("noplaylist").style.display = "block";
                document.getElementsByClassName("player")[0].style.display = "none";
            }

        });

}

// ============================================ END FETCH  MUSIC TO PLAYLIST TABLE=======================================




// ============================================ SEARCH SONG FUNCTION =======================================
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
// ============================================ END SEARCH SONG FUNCTION =======================================




// ============================================ ADD TO PLAYLIST =======================================
function addfunc(obj) {
    document.getElementById("playlist").style.display = " ";
    document.getElementsByClassName("playlistTable")[0].style.display = "block";
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
            
            data.forEach(function (element) {
                document.getElementById("noplaylist").innerHTML = " ";
                displayplaylistTable(element);
            });
        })
}

// ============================================ END ADD TO PLAYLIST =======================================



// ============================================ DELETE SONG FUNCTION =======================================
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
// ============================================ END DELETE SONG FUNCTION =======================================




// ============================================  DISPLAY MUSIC  =======================================
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

// ============================================ END DISPLAY MUSIC  =======================================



// ============================================  DISPLAY MUSIC PLAYLIST =======================================
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
            <span class="playbtn" data-play="${element.urlPath}" data-current="${element.orderId}" onclick="playfunc(this)" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg></span>
                    </td>
        </tr>`;
    document.getElementById("tbody2").innerHTML += tr2;
}
// ============================================ END DISPLAY MUSIC PLAYLIST =======================================



// ============================================  PLAY MUSIC =======================================
function playfunc(obj){
   
    document.getElementsByClassName("player")[0].style.display = "block"
    let title = obj.getAttribute("data-play"); 
    let orderid = obj.getAttribute("data-current"); 
    let player = document.getElementsByClassName("player")[0];
    player.innerHTML = `<audio controls autoplay>
            <source id="toplay" src="http://localhost:3000/${title}" type="audio/mpeg">
        </audio><div class="navigation" >
        
        <button id="prev" data-currentprev="${orderid}" onclick="prevSong(this)" class="action-btn">
              <i class="fas fa-backward"></i>
        </button>
        
        
        <button id="next" data-current="${orderid}" onclick="nextSong(this)" class="action-btn">
              <i class="fas fa-forward"></i>
        </button>
       
        <button id='shuffle' onclick="shuffle()" class="action-btn">
              <i class="fas fa-shuffle"></i>
        </button>

        <button id='repeat' onclick="repeat()" class="action-btn">
                  <i class="fas fa-repeat"></i>
            </button>

  </div>`;
        
}




// ============================================ END PLAY MUSIC =======================================

const prevBtn = document.querySelector('#prev');
 const nextBtn = document.querySelector('#next');

 function prevSong(obj) {
    let orderid= obj.getAttribute('data-currentprev')
  
   fetch('http://localhost:3000/api/playlist', {
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
    }
}).then(res => res.json())
    .then(data => {
        
       let prevsong = data.filter(item => item.orderId == Number(orderid)-1);

       let player = document.getElementsByClassName("player")[0];
       
       player.innerHTML = `<audio controls autoplay>
            <source id="toplay" src="http://localhost:3000/${prevsong[0].urlPath}" type="audio/mpeg">
        </audio><div class="navigation" >
        
        <button id="prev" data-currentprev="${prevsong[0].orderId}" onclick="prevSong(this)" class="action-btn">
              <i class="fas fa-backward"></i>
        </button>
        
        
        <button id="next" data-current="${prevsong[0].orderId}" onclick="nextSong(this)" class="action-btn">
              <i class="fas fa-forward"></i>
        </button>
       
        <button id='shuffle' onclick="shuffle()" class="action-btn">
              <i class="fas fa-shuffle"></i>
        </button>

        <button id='repeat' onclick="repeat()" class="action-btn">
                  <i class="fas fa-repeat"></i>
            </button>


  </div>`;
    });
}
function nextSong(obj) {
    let orderid= obj.getAttribute('data-current')
   console.log(orderid);
   
   fetch('http://localhost:3000/api/playlist', {
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
    }
}).then(res => res.json())
    .then(data => {
        
       let nextsong = data.filter(item => item.orderId == Number(orderid)+1);
       let player = document.getElementsByClassName("player")[0];
       player.innerHTML = `<audio controls autoplay>
            <source id="toplay" src="http://localhost:3000/${nextsong[0].urlPath}" type="audio/mpeg">
        </audio><div class="navigation" >
        
        <button id="prev" data-currentprev="${nextsong[0].orderId}" onclick="prevSong(this)" class="action-btn">
              <i class="fas fa-backward"></i>
        </button>
        
        
        <button id="next" data-current="${nextsong[0].orderId}" onclick="nextSong(this)" class="action-btn">
              <i class="fas fa-forward"></i>
        </button>
       
        <button id='shuffle' onclick="shuffle()" class="action-btn">
              <i class="fas fa-shuffle"></i>
        </button>

        <button id='repeat' onclick="repeat()" class="action-btn">
                  <i class="fas fa-repeat"></i>
            </button>


  </div>`;
    });
}


function shuffle(){
    
    

    fetch('http://localhost:3000/api/playlist', {
     headers: {
         'Authorization': `Bearer ${sessionStorage.getItem('tokenLogin')}`
     }
 }).then(res => res.json())
     .then(data => {
         
        let shuffleNum = Math.floor((Math.random() * data.length) + 1)

        let nextsong = data.filter(item => item.orderId == shuffleNum);
        let player = document.getElementsByClassName("player")[0];
        player.innerHTML = `<audio controls autoplay>

             <source id="toplay" src="http://localhost:3000/${nextsong[0].urlPath}" type="audio/mpeg">
         </audio>
         <div class="navigation" >
         
         <button id="prev" data-currentprev="${nextsong[0].orderId}" onclick="prevSong(this)" class="action-btn">
               <i class="fas fa-backward"></i>
         </button>
         
         
         <button id="next" data-current="${nextsong[0].orderId}" onclick="nextSong(this)" class="action-btn">
               <i class="fas fa-forward"></i>
         </button>
        
         <button id='shuffle' onclick="shuffle(this)" class="action-btn">
               <i class="fas fa-shuffle"></i>
         </button>
        
         <button id='repeat' onclick="repeat()" class="action-btn">
                  <i class="fas fa-repeat"></i>
            </button>

   </div>`;
     });

}

function repeat(){
    let player = document.querySelector("audio");
    let repeat = document.querySelector("#repeat > i ");
    repeat.setAttribute("class","fa-solid fa-arrow-rotate-right");
    
    player.loop = true

}