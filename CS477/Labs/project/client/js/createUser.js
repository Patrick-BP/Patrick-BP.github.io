
    document.getElementById('create-btn').onclick = createAccount;
   
    

async function createAccount(event) {
    event.preventDefault();
const usrname = document.getElementById('usrname');
console.log(usrname);
const psword = document.getElementById('pssword');
    const response = await fetch('http://localhost:8888/users', {
        method: 'POST',
        body: JSON.stringify({
            username:usrname.value,
            password: psword.value
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