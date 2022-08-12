import { HOSTNAME } from './config.js';

window.onload = function () {
    document.getElementById('signinBtn').onclick = signIn;
}

async function signIn() {
 
    const response = await fetch(`${HOSTNAME}/login`, {
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('formusername').value,
            password: document.getElementById('formpassword').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    if (result.error) {
        document.getElementById('error').innerHTML = result.message;
    } else {
        sessionStorage.setItem('accessToken', result.data.accessToken);
        window.location = 'books.html';
    }

}