window.onload = function(){ 
    

      if(sessionStorage.getItem('accessToken')){
        document.getElementById('addtweetBtn').onclick = addTweet;
           fetchTwites();
      }else{
          window.location='index.html';
      }
}
async function addTweet(event){
    event.preventDefault();
    const userid = sessionStorage.getItem('userID');
    const username = sessionStorage.getItem('username');
    const body = document.getElementById('tweet-body');
    console.log(body.value);
    console.log(username);
    const response = await fetch('http://localhost:8888/tweets',{
        method:'POST',
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
            tweet: body.value,
            user: userid

        })
        
    });
    
    const result = await response.json();
    if(result.error){
        alert('error')
    }else{
        alert('tweet saved')
    }
}