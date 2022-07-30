"use strict";
/* eslint-disable */

const Product  = require('../model/product');

exports.getAll = (req, res, next)=>{
    res.json(Product.getAll());
 };

 exports.getById = (req, res, next)=>{
    res.json(Product.getById(req.params.id));
 };

 exports.save = (req, res, next)=>{
   let addProd = new Product(null, req.body.title, req.body.price, req.body.description).save();
   res.json(addProd);
 };

 exports.update = (req, res, next)=>{
    let updateProd = new Product(req.params.id, req.body.title, req.body.price, req.body.description).update();
    res.json(updateProd);
};

exports.deleteById = (req, res, next)=>{
    res.json(Product.deleteById(req.params.id));
};

