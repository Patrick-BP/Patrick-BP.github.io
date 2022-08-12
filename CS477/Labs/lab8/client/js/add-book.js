const HOSTNAME = "http://localhost:3000";
window.onload = function (){
    document.getElementById('add-button').onclick = addBook;
}

async function addBook(event){
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const isbnInput = document.getElementById('isbn');
    const publishedDateInput = document.getElementById('publishedDate');
    const authorInput = document.getElementById('author');

    const response = await fetch(`${HOSTNAME}/books`,{
        method:'POST',
        body: JSON.stringify({
            title:titleInput.value,
            isbn:isbnInput.value,
            publishedDate:publishedDateInput.value,
            author:authorInput.value

        }),
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'content-type':'application/json'
        }
    });
    const data = await response.json();
    document.getElementById('book-add-form').reset();
    console.log(data);
    window.location = 'books.html';

}

