window.onload = function (){
    document.getElementById('logout').onclick = logout;
}

function logout(){
    sessionStorage.removeItem('accessToken');
    window.location='index.html';
}