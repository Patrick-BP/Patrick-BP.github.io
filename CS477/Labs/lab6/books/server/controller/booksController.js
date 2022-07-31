const Book = require('../model/books');

exports.getAll = async (req, res, next)=>{
    res.json(await Book.getAll() );
};
exports.getById = async (req, res, next)=>{
   res.json(await Book.getById(req.params.id));
};
exports.save = async (req, res, next)=>{
    let prod = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author)
    const result = await prod.save()
    prod._id = result.insertedId;
    res.json(prod);
};
exports.update = async (req, res, next)=>{
    let updateProd = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    await updateProd.update();
    res.json(updateProd);
};
exports.deleteById = async(req, res, next)=>{
    await Book.deleteById(req.params.id)
    res.json({_id: req.params.id});
};
 