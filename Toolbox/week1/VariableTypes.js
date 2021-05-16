/************************************/
//          VARIABLE TYPES          //
/************************************/
// Date: 15/05/21
// Description: Here I demonstrate
//              basic primitive and
//              object types

// Declaration of numbers in JS
let n1 = 5.46;
let n2 = 3.45;
console.log(String(n1 + n2))
// Complex math in JS
console.log(Math.asinh(n1 + n2))

// Declare a dynamic variable that
// will be convertedf to a number
// IMP: String => NaN
let dynamicVariable = true
console.log(Number(dynamicVariable))

// Something fun about numerical
// values: comparison is not
// perfect due to float point
let number1 = 0.1;
let number2 = 0.3 - 0.2;
console.log(number1 === number2)

// Some useful functions used
// to process strings
let userName = 'Diego,Herrera,JavaScript'
// Split with given separator
console.log(userName.split(','))
// Capture substring in Python style
console.log(userName.slice(5,-5))
// Concatenate
console.log(userName + 'SomeTail')
// Get char at position
console.log(userName[6])

// Template string. I think this is
// more usefull for code clarity
let names = ['Roberto','Carlos','Sara']
for(let idx = 0; idx < names.length; idx ++){
    console.log(`I am ${names[idx]}`)
}

// Non primitive types: objects
let myObject = {
    itsName : 'Marlon',
    itsShape : 'Circle'
};
// Access its properties using
// dot notation
console.log(myObject.itsName)
// Access its properties like
// Python dictionary
console.log(myObject['itsShape'])
// Former might be useful if
// property name is unknown