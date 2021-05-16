/************************************/
//       MY FIRST JS PROGRAM        //
/************************************/
// Date: 15/05/21
// Description: Simple Hello World

// Declare a string variable
let message = 'Hello, world';
console.log(message);

// Declare two numeric variables
// and add them
let n1 = 5;
let n2 = 3;
console.log(n1+n2)
console.log(Math.asinh(n1+n2))

// Slice hello message
// Original is not affected
console.log(message.slice(-3,-1))
message = 'Hola Mundo'
console.log(message)

// Comparison operators
message2 = 'Hola Mundo'
console.log(message === message2)

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdin.on('data', function(data){
    console.log(data.toString())
})