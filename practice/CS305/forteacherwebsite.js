let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topSalary(salaries) {
  
    let arr = Object.entries(salaries);
    let maxEntry = [null, 0];
    const [name, salary] = arr.reduce(([maxName, maxSal], [name, sal]) => (sal > maxSal) ? [name, sal] : [maxName, maxSal], maxEntry);
    return name;
  }
  
  console.log("max salary is", topSalary(salaries));

  

  //// second exam

  "use strict";
function birthday() {
    console.log(this);     //_____________ {name: “Bob”, age: 10} __________________
    this.age = this.age + 1; // _____________ no output ___________________
    console.log(this.age);
    }//______________ 11 ______________________}
const person = {  name: "Bob", age: 10, birthday: birthday };
console.log(person.birthday() ); // ___________undefined ______________________________



  //"use strict";
function birthday() {
    console.log(this);     //_______________ Global _____________________________
    this.age = this.age + 1; // _____________ no output ___________________
    console.log(this.age);   //________________ NaN ____________________
    }
const person = {  name: "Bob", age: 10, birthday: birthday}
birthday = person.birthday;
console.log(birthday()); //___________undefined ______________________________




  "use strict";
function birthday() {
    console.log(this);     //_______________ undefined _____________________________
    this.age = this.age + 1; // _____________ error ___________________
    console.log(this.age);   //________________ not executed ____________________
    }
const person = {  name: "Bob", age: 10, birthday: birthday}
birthday();  



const person1 = {first: "Bob", last: "Green"}; 
const person2 = person1; 
person2.first = "Jim"; 
person2.last = "Davis"; 
console.log(person1 === person2);  //____________________________________true
console.log(person1.first);  //____________________________________jim




function callBack(signal, input, call1, call2) {
    if (signal) return call1 (input)  //true then result is double the input
    else return call2 (input);  //ralse then result is half the input
  }
  console.log(callBack ( true, 100, apple, banana)); //200 
  console.log(callBack ( false, 200, apple, banana)); //100
  
  function apple(num){
    return num * 2;
  }
  function banana(num){
    return num / 2;
  }

  let numbers = "4321".split(""); 
numbers.sort();
console.log(numbers.join("+")); 



"use strict";
/* Write a program to compute student grades and the average score for the class.  Your program should have a quiz object that will contain properties of “students” and “key”.  The “students” property will be an array of student objects of the following form:

student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”.  The answer property holds an array that records the students answers for the quiz.  The array holds objects that have a question id (“qid”) property that uniquely identifies the question, and an “ans” property that holds the student’s answer.

The ”key” property of the quiz will hold an array with objects that give the correct answers.  

Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students, 
•	scoreStudent(sid), computes the quiz score for this student

The answer arrays might not have the questions in the same order.  Write a function, answerComparator, that you can use to sort the answer arrays by the quiz id, “qid”.   You may assume that there will be answer objects for every question so that once they are sorted they arrays will have the student answers and the corresponding key answer in the same position of each array.  Score 1 point for each answer that matches the key.
*/

const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
function answerComparator(ans1, ans2) {
    return ans1.qid - ans2.qid;
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {
    const student = this.students.find(aStudent => sid === aStudent.sid);
    const studentAnswers = student.answers.sort(answerComparator);
    const key = this.key;
    let score = 0;
    for (let i = 0; i < key.length; i++) {
        if (studentAnswers[i].ans === key[i].ans) {
            score++;
        }
    }
    return score;
};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function(){
    let total = 0;
    for (const student of this.students){
        total += this.scoreStudent(student.sid);
    }
    return total/this.students.length;

};

console.log("expect 1: ", quiz.scoreStudent(10) );
console.log("expect 2: ", quiz.scoreStudent(11) );
console.log("expect 2: ", quiz.scoreStudent(12) );
console.log("expect 1.667: ", quiz.getAverage() );