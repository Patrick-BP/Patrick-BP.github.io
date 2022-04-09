function Person(name) {
    //console.log('Person1 this: ', this); //____surgeon {}____________________
    this.name = name;
   //console.log('Person2 this: ', this); //____surgeon {name: freid}____________________
   }
   function Doctor(name, department) {
    //console.log( this); //________surgeon {} surgeon {}________________
    Person.call(this, name, department);
   //console.log(this); //_______surgeon {name: freid}_________________
    this.dept = department;
   }
   Doctor.prototype.report = function() {
    return "medical report"
   };
   function Surgeon(name, department) {
  //console.log(this); //_________surgion {}_______________
    Doctor.call(this, name, department);
    //console.log(this); //_______surgeon {name: freid, dept: cardiology}_________________
   }
   Surgeon.prototype.operate = function() {
    return 'operation performed.'
   };
   Surgeon.prototype.__proto__ = Doctor.prototype;
  surg1 = new Surgeon("Fred", "Cardiology"); 
  
   onsole.log(surg1.dept); //_______cardiology_________________
   
   console.log(surg1.name); //__________fred_____________
   
  console.log(surg1.report()); //________medical report________________
  
console.log(surg1); //__________{name: freid, dept: cardiology}______________
   
  console.log(surg1.__proto__); //_________doctor{operate:[fn]}_______________??????????????
    
   console.log(surg1.prototype); //___________undefined_____________
   console.log(Surgeon.__proto__); //________{}________________????
   console.log(Surgeon.prototype); //_________Doctor { operate: [Function (anonymous)] }_______________???????
   console.log(Surgeon.prototype.__proto__); //_________{ report: [Function (anonymous)] }____________ ?????????
   