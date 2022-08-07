
    document.getElementById('create-btn').onclick = createAccount;
   
    

async function createAccount(event) {
    event.preventDefault();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
console.log(document.getElementById('username').value);
    const response = await fetch('http://localhost:8888/users', {
        method: 'POST',
        body: JSON.stringify({
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            skype: document.getElementById('skype').value,
            username: document.getElementById('usrname').value,
            password: document.getElementById('pssword').value,
            createdAt: today.toDateString()
            
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const result = await response.json();
    if(result.error) {
        document.getElementById('invalid-feedback2').style.display = "block";
        document.getElementById('invalid-feedback2').innerHTML = result.message;
        
    } else {
        
        window.location = 'index.html';
    }

}