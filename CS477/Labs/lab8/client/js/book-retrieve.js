const HOSTNAME = "http://localhost:3000";
window.onload = function(){
    fetchBooks();
}

function fetchBooks(){
    fetch(`${HOSTNAME}/books`,{
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        }
    })
    .then(response=>response.json())
    .then(books =>{displayBooks(books)})
    .catch(err=>{
        console.log(err.message);
    });

}

function displayBooks(books){
    let tbody = document.getElementById('tbody');
    console.log(books);
    books.forEach(element => {
        tbody.innerHTML += `
        <tr id="tr${element._id}">
            <th scope="row">${element._id}</th>
            <td>${element.title}</td>
            <td>${element.isbn}</td>
            <td>${element.publishedDate}</td>
            <td>${element.author}</td>
            <td><button type="button" class="btn btn-primary" onClick="editBook('${element._id}')">Edit</button></td>
            <td><button type="button" class="btn btn-danger" onClick="deleteBook('${element._id}')">Delete</button></td>
          </tr>
        `;
    });
       
   
};

function deleteBook(id){
    console.log(id);
    fetch(`${HOSTNAME}/books/`+id,{
        method:'DELETE',
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'content-type':'application/json'
        }
    }).then(response=>{
        document.getElementById(`tr${id}`).remove();
    }).catch(err=>console.log(err.message));

}
function editBook(id){
    window.location = 'edit-book.html?id='+id;
}