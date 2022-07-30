"use strict";
/* eslint-disable */
const Products = [
    {id:1, title:"HP", price:456, description:"hp is good"},
    {id:2, title:"Dell", price:656, description:"Dell is good"},
    {id:3, title:"Acer", price:896, description:"Acer is good"},
    {id:4, title:"Apple", price:999, description:"Apple is good"},

]

let counter =5;

module.exports = class Product{
    constructor(id, title, price, description){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description= description

    }

    static getAll(){
        return Products;
      
    }
    static getById(id){
        const index = Products.findIndex(prod => prod.id == id);

        if(index < -1){
           throw new error('PRODUCT NOT FOUND');
        }else{
            return Products[index];
        }
    }

    save(){
        this.id = counter++;
        Products.push(this);
        return this;
    }

     update(){
        const index = Products.findIndex(prod => prod.id == this.id);

        if(index < -1){
           throw new error('PRODUCT NOT FOUND');
        }else{
            Products[index] = this;
            return this;
        }

    }

    static deleteById(id){
        const index = Products.findIndex(prod => prod.id == id);

        if(index < -1){
           throw new error('PRODUCT NOT FOUND');
        }else{
            let temp = Products[index];

            Products.splice(index, 1);
           
            return temp;
        }

    }
}