module.exports = class Response{
    constructor(err, message, data){
        this.err = err;
        this.message = message;
        this.data = data
    }
}