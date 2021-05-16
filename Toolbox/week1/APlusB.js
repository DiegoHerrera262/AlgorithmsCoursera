/***************************************
//      ADDITION OF TWO NUMBERS
***************************************/
// Date: 16/05/21
// Description: This is a model 
//              submition for this
//              course

// Function for adding the elements 
// of an array
function addElements(myArray){
    let sum = 0;
    for(let idx=0; idx<myArray.length; idx++){
        sum += parseInt(Number(myArray[idx]))
    }
    return sum;
}
// For storing stdin data
let numbers = [];
// Reading with process.stdin
process.stdin.on('data',function(data){
    // Read all data in one line
    numbers = data.toString().trim().split(' ');
    // Add all data
    console.log(addElements(numbers));
    // Exit process
    process.exit();
});