"use strict";
/* eslint-disable */

// Fix the slow function to be asynchronous/non-blocking
function slow(callback){ 
    
	for(let i=0; i<= 5e8; i++){}
	if (Math.random() > 0.5) { 	
		return callback("Error",null) 
	} 
	return callback(null, {id:12345}) 
} 

function exec(fn){ 
	// Complete the code here to implement chaining with callback
    return {
        done:function(func){
            
        },
        fail: function(func){
          
        }
    }
    
}

exec(slow).done(function(data){ console.log(data); })
	.fail(function(err){ console.log("Error: " + err); }); 