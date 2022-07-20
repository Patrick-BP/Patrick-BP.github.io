"use strict";
/* eslint-disable */

// Fix the slow function to be asynchronous/non-blocking
function slow(callback){ 
    let random = Math.random();
    console.log(random);
	if (random > 0.5) { 	
		return callback("Error",null) 
	} 
	return callback(null, {id:12345}) 
} 

function exec(fn){ 
	// Complete the code here to implement chaining with callback
    let obj = {};
    fn(function(err, data){
        obj.done = function(fn){
            fn(data);
            return obj;
        }
        obj.fail = function(fn){
            fn(err)
            return obj;

        }
        if(err == null){
            obj.fail = function(fun){return obj};
        }else 
            obj.done = function(fun){return obj};
    });
return obj;
}

exec(slow).done(function(data){ console.log(data); })
	.fail(function(err){ console.log("Error: " + err); }); 