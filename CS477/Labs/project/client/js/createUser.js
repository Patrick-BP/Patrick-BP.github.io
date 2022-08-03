window.onload = function(){
    document.getElementById('create-btn').onclick = createAccount;
    
}
// document.getElementById('create-btn').onclick = createAccount;
console.log();
async function createAccount() {
    // add the user to the database
console.log("object");
    
    const usernameInput = document.getElementById('username1');
    const passwordInput = document.getElementById('password1');

    const response = await fetch('http://localhost:8888/users', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();
    window.location = 'index.html';

}