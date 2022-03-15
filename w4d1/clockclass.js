"use strict";
/* eslint-disable */

class Clock{
    constructor({template}){
        this.template = template;
    }
      
     render() {
       
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        this.template = hours + ":" + mins + ":" +secs;
          
    
        console.log(this.template);
      }

    start(){
        this.render();
     return setInterval(this.render, 3000);

    }
    stop(){
        clearInterval(this.start());

    }
}

let clock = new Clock({template: 'h:m:s'});
  clock.start();