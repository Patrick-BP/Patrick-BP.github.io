
 let displayDiv = document.getElementById('displayFlowers');
  if (sessionStorage.getItem('accessToken')) {
    
    fetchTwites();
    fetchFollowers() 
  } else {
    window.location = 'index.html';
  }


  //=============================================================

async function fetchTwites() {
  let usrid = sessionStorage.getItem('userID');
  const response = await fetch('http://localhost:8888/tweets/' + usrid, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  });
  const result = await response.json();
// console.log(result);
  if (!result.error) {
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
                  <h3>${twite.user.fullname}<span class="time">@${twite.createdAt}</span></h3>
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

    let fllname = sessionStorage.getItem('fullname');
    document.getElementById('welcomeUsername').innerHTML = `<h2>Welcome ${fllname}</h2>`

  } else {
    document.getElementById('post-twite').innerHTML = result.message;
  }
}



//=============================================================


async function fetchFollowers(){
  let usrid = sessionStorage.getItem('userID');
  
  const response = await fetch('http://localhost:8888/followers/'+usrid, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type':'application/json'
    }
  });

  const result = await response.json();

  if (!result.error) {
    
    result.data.followers.forEach(follower => {
      displayDiv.innerHTML +=`
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="post__avatar2">
              <img src="public/images/profile.png" alt="" />
            </div>
                ${follower.fullname}
                <span class="badge bg-primary rounded-pill" data-unfollow=${follower._id}  onclick="delFollower(this)">Unfollow</span>
              </li> `

    });

    
    
  } else {

    document.getElementById('displayFlowers').innerHTML = result.message;

  }

}