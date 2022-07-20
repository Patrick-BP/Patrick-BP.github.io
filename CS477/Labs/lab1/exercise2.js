"use strict";
/* eslint-disable */

/*

######## Exercise 2  #######


Explain why do we want sometimes to use setImmediate instead of using setTimeout?

      -  because if you move the two calls within an I/O cycle, the immediate callback is always executed first

Explain the difference between process.nextTick and setImmediate?
      - process.nextTick is executed everytime an queue in the cycle is visited 
      and has a higher priority
      - setImmediate is executed once in every cycle

Name 10 global modules/methods available in Node environment.
    setTimeOut(), SetInterval(), setImmediate(), require, module, global, buffer, 
    
    
    */

