window.onload = function () {
    document.getElementById('create-btn').oninvalid = createAccount;
}
async function createAccount(event) {
    // add the user to the database

    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const response = await fetch('http://localhost:3000/users', {
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
    document.getElementById('create-user-form').reset();
    window.location = 'login.html';

}