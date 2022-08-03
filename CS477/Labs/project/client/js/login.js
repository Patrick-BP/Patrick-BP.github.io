window.onload = function(){
    document.getElementById('signin-btn').oninvalid = addUser;
}
async function addUser(event){
    // add the user to the database

    EventCounts.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const response = await fetch('http://localhost:8888/users',{
        method:'POST',
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        }),
        headers:{
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();
    document.getElementById('login-form').reset();
    window.location='index.html';

}