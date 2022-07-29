"use strict";
/* eslint-disable */
const Product = require('../model/product')


exports.getAll = (req, res, next)=>{
    res.json(Product.getAll());

};
exports.getById = (req, res, next)=>{
    res.json(Product.getById(req.params.id));

}