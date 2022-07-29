"use strict";
/* eslint-disable */
let products=[
    {id:1, title:"hp", price:348, description:"excellent"},
    {id:2, title:"dell", price:999, description:"good"},
    {id:3, title:"Apple", price:1348, description:"great"},
    {id:4, title:"acer", price:748, description:"not bad"}
];

let counter = 5;
module.exports = class Product{

    constructor(id, title, price, description){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    static getAll(){
        return products;
    }
    static getById(id){
        let index = products.findIndex(prod =>prod.id == id);
        if(index < -1){
            throw new error('No such product found');

        }else{
            return products[index];
        }

    }

}