window.onload = function (){
    if(sessionStorage.getItem('accessToken')){
         fetchTwites();
    }else{
        window.location='index.html';
    }
   
}

async function fetchTwites(){
  let usrid = sessionStorage.getItem('userID');
    const response = await fetch('http://localhost:8888/tweets/'+usrid,{
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    });
    const result = await response.json();

    if(!result.error) {
        let html = "";
        result.data.forEach(twite => {    
            html += `
            <div class="post">
            <div class="post__avatar">
              <img src="public/images/profile.png" alt="" />
            </div>
      
            <div class="post__body">
              <div class="post__header">
                <div class="post__headerText">
                  <h3>${twite.user.username}</h3>${twite.createdAt}
                </div>
                <div class="post__headerDescription">
                  <p> ${twite.tweet}</p>
                </div>
              </div>
              
              
            </div>
          </div>
            `
        });
        document.getElementById('post-twite').innerHTML = html;
      
      let usrname = sessionStorage.getItem('username');
      document.getElementById('welcomeUsername').innerHTML = `<h2>Welcome ${usrname}</h2>`
   
    } else {
        document.getElementById('post-twite').innerHTML = result.message;
    }
}



