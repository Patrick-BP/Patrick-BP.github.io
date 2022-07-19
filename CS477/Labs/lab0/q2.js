"use strict";
/* eslint-disable */
let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    }

    save(){
        let student = db.find(elem => elem.id === this.id)
        if(student){
            throw new error("STUDENT ALREADY EXIST")
        }else
        db.push(this)
    }

    edit(){
    
    let result = db.find(elem=>elem.id === this.id);
    Object.assign(result, this)
      
 
    }

    static getById(id){
        let index  = db.findIndex(()=>id === id)
        let result  = db[index];
       console.log(result) 
       
    }

    static getAll(){
        console.log(db)
    }

    static deleteById(id){
        let index  = db.findIndex(elem=>elem.id === id);
        if(index == -1){
             throw new Error("element not found");
        }
        else
       db.splice(index, 1);
        
       
    }
}

new Student(4, 'Tina', 'Xing').save(); //save to db
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
Student.deleteById(4); //remove studentId=4 from db
Student.getAll(); //return db;
Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}