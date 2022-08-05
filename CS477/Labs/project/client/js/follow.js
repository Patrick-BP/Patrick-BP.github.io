
const userid = sessionStorage.getItem('userID');
function addFollower(id){
   console.log(id);
    fetch(`http://localhost:8888/users`, {
        method:'POST',
        body:JSON.stringify({
            user:userid,
            followers: id
        }),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    });

        
}

