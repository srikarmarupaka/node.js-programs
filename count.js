var counter=function(arr){
    return "There are "+ arr.length+ " elements in this array";
}
//note we have used ' ' and "" both , both play same role
var adder=function(a,b){
    return `The sum of the 2 numbers is ${a+b}`; //this is called template string
    //note we use `(below escape)
}

module.exports.pi=3.142; //you can also export directly, without var.



// module.exports=counter; //exports the counter module...
 module.exports.counter=counter;
 module.exports.adder=adder; //lhs and rhs not compulsory to be same, just for our convienece

// module.exports={
// counter:counter,
// adder:adder,
// } //this should also work