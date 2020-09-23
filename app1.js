// console.log('Hey Ninjas')
// var time=0;
// var timer = setInterval(function name(params) {
//     time+=2;
//     console.log(time + ' seconds have passed');
//     if(time>5){
//         clearInterval(timer);
//     }
// }, 2000);
// console.log(__filename);
// console.log(__dirname);

/***************************************** */

// //normal function
// function sayHi(){   //function_defination
//     console.log('hi')
// }
// sayHi();    //function_call

// //function expression
// var sayBye=function(){    
//     //Here variable is equal to anonymus function means variable is named by  the function
//     console.log('BYE!');
// }
// sayBye(); //sayBye is directly called here

// function callFunction(fun){
//     fun();
// }
// callFunction(sayBye); //sayBye is indirectly called by passing saybye variable into callFunction
/*************************************************/

// // Modules and require
// // modules: we split our code into different logical modules
// //require: takes filepath of the importing file an
// var counter = require('./count') // no need .js extension 

// //now this counter variable consists of imported modules from require
// console.log(counter(['Srikar',"Marupaka"])); //we are passing the arguments through counter anonymous function (function expression)
//  /******************************** */
//  module patterns

// var stuff=require('./count');
// console.log(stuff.counter(['Srikar',"Sharma", 'Marupaka']));
// console.log(stuff.adder(7,8))
// console.log(stuff.pi)  //note ; is not mandatory
// console.log(stuff.adder(stuff.pi,10-stuff.pi))
// console.log(stuff.adder(stuff.pi,10))

/*************************************** */

// // //Event Module
// var events = require('events'); 
// var util =require('util'); // used to create custom events
// // var myEmitter= new events.EventEmitter();// all the EventEmitter's objects are stored in myEmitter
// // myEmitter.on('someEvent',function(msg){
// //     console.log(msg);
// // })
// // myEmitter.emit('someEvent','the event was emitted.');

// var Person= function(name){
//     this.name=name
// }
// util.inherits(person, events.EventEmitter);

// var james= new Person('james');
// var mary= new Person('mary');
// var ryu= new Person('ryu');
// var people=[james,mary,ryu];
// people.forEach(function (person) {
//     person.on('speak', function(mssg) {
//         console.log(person.name+ ' said,  "' + mssg+'"');
//     })
// });

// james.emit('speak', 'Hey dudes!');
// ryu.emit('speak', 'I want a curry.');

/***************************************************************** */

//reading and writing files

//  var fs=require('fs');  //typical naming convention : variable name = module name

// var readMe = fs.readFileSync('readMe.txt', 'utf-8'); //it fully reads the readFileSync() before going to  the underneath program 
// //the above one block the flow of the code until the above one is complete.
// //code
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);

// var read = fs.readFile('readMe.txt', 'utf-8', function (err, data) {
//     console.log(data)
// }); //here it is not blocking the code whereas in sync. the underneath code will run no matter the above
// console.log('test'); //this will be seen first because it's assync


// fs.readFile('readMe.txt', 'utf-8', function (err, data) {
//     fs.writeFile('writeMe.txt', data);
// }); //for a server assynchronous code is preferred to be non-blocked.

/**************************************** */
//creating and removing directories
//delete file
// var fs=require('fs');
//  fs.unlink('writeMe.txt');

//incomplete
/******************************** */