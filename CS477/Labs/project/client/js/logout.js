window.onload = function (){
    document.getElementById('logout').onclick = logout;
}

function logout(){
    //sessionStorage.removeItem('accessToken');
    sessionStorage.clear();
    window.location='index.html';
}