const books = [
    {id:1, title:"java", isbn:"0-3403-8673-8", publishedDate:"03-09-2021", author:"Eimhir MacAlastair"},
    {id:2, title:"javascript", isbn:"0-6969-8578-0", publishedDate:"01-29-2015", author:"Kenneth Boyd"},
    {id:3, title:"Algorithm", isbn:"0-8489-9973-8", publishedDate:"12-06-2010", author:"Gilleasbaig Lusk"},
    {id:4, title:"SQL", isbn:"0-7581-1908-9", publishedDate:"07-13-2021", author:"Raghnaid Begbie"}
]

let counter = 5;
module.exports = class Book{

    constructor(id, title, isbn, publishedDate, author){
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        return books;
    }

    static getById(id){
        let index = books.findIndex(book => book.id == id);
        if(index < -1){
            throw new error("BOOK NOT FOUND");
        }else{
            return books[index];

        }
    } 

    save(){
        this.id = counter++;
        books.push(this);
        return this;
    }

    update(){
        let index = books.findIndex(book => book.id == this.id);
        if(index < -1){
            throw new error("BOOK NOT FOUND");
        }else{
         books[index] = this;
         return this;

        }
    }

    static deleteById(id){
        let index = books.findIndex(book => book.id == id);
        if(index < -1){
            throw new error("BOOK NOT FOUND");
        }else{
            let temp = books[index];
            books.splice(index, 1);
            return temp;

        }
    }
    
}