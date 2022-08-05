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
    console.log(userid);
    const response = await fetch('http://localhost:8888/tweets',{
        method:'POST',
        body: JSON.stringify({
            tweet: body.value,
            user: userid

        }),
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
        
    });
    
    const result = await response.json();
    if(result.error){
        alert('failed')
    }else{
        document.getElementById('tweet-body').value = " ";
        location.reload()
    }
}