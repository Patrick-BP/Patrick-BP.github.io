"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findTitles, addBook, showTitles, findAuthors, findIDs, showAuthors}; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;


    return titles;
}
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showAuthors() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;

    
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
function showIDs() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const iDs = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    iDs.sort();
    const iDsString = iDs.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = iDsString;

    
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
      for (const element of library) {
          titles.push(element.title);
      }
    return titles;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
 function findAuthors() {
    let authors = [];
      for (const element of library) {
          authors.push(element.author);
      }
    return authors;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
 function findIDs() {
    let titles = [];
      for (const element of library) {
          titles.push(element.libraryID);
      }
    return titles;
}
// const title = document.getElementById("title").value; 
// const author = document.getElementById("author").value;
// const libraryId = document.getElementById("libraryid").value;
/**
 * @param {String} title the title of the new book
 * @param {String} author the author of the new book
 * @param {Number} libraryID ID of the book
 * @returns {object} return the new book
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title, author, libraryID){

    
    let newBook = {title,  author, libraryID};
        
    library.push(newBook);
  

    return newBook;
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
function scramble(){
    let sortedlength = [];
    let sorter = showTitles();
    // sortedlength = 
    let str = sorter.toString();

let strtoarr = str.split(/[, " "]/);
strtoarr.sort((a,b)=>(a.length > b.length)? 1 : -1);

const arrString = strtoarr.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = arrString;

}
