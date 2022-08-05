let searchinput;
let searchresult;

    searchinput = document.getElementById('search-input');
    searchresult = document.getElementById('search-result');



function searchUserName(){
    searchresult.style.display = "block";
   
    fetch(`http://localhost:8888/users?search=${searchinput.value}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data =>{
            searchresult.innerHTML = ` <h2 >Search result</h2>`;
            data.forEach(element => {

                displayTweetsTable(element);

            });

        })
}

function displayTweetsTable(element){

    let tr = `<table id="searchtable"><tr >
    
    <td id="usrname">${element.username}</td>
    <td  id="follow"><button data-follower = "${element._id}" onclick="addFollower(this)">follow</button></td>
    </tr></table>`;
    
    searchresult.innerHTML += tr;

}
function addFollower(obj){
    let followerId = obj.getAttribute('data-follower');
    let userId = sessionStorage.getItem('userID');
    fetch('http://localhost:8888/users/follow',{
        method:'POST',
        body:JSON.stringify({
            userId: userId,
            followerId: followerId
        }),
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).catch(err =>{
        console.log(err);
    });
}