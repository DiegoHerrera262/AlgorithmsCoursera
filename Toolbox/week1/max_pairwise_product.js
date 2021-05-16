/***************************************
//      MAXIMUM PAIRWISE PRODUCT
***************************************/
// Date: 16/05/21
// Description: First assignment. find
//              the maximum pairwise
//              product of array els.

/*
// Function for brute forcing solution
function MaxPairProd(numbers){
    // iterate over all pairs
    // taken symmetry into
    // account
    let prod = 0;
    for(let idx=0; idx<numbers.length; idx++){
        for(let jdx=idx+1; jdx<numbers.length; jdx++){
            let p = numbers[idx] * numbers[jdx]
            if(p > prod){
                prod = p
            }
        }
    }
    return prod;
}

// Read and print result to std
// using readline
let arraySize = -1;
let numberArray;
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(data){
    if(arraySize === -1){
        arraySize = parseInt(data.toString())
    } else{
        numberArray = data.toString().trim().split(' ').map(Number);
        console.log(MaxPairProd(numberArray));
        process.exit();
    }
});
module.exports = MaxPairProd;
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine(line){
    const arr = line.toString().split(' ').map(Number);
    console.log(max(arr));
    process.exit();
}

function max(numbers){
    // Find the maximum value
    let maxVal = 0;
    let maxValIndex = 0;
    for(let idx = 0; idx < numbers.length; idx++){
        if(numbers[idx] > maxVal){
            maxVal = numbers[idx];
            maxValIndex = idx
        } 
    }
    // Find the second max val
    let secMaxVal = 0;
    for (let idx = 0; idx < numbers.length; idx++) {
        // Find trith of requirement
        // criteria for updating
        let isGrater = secMaxVal < numbers[idx];
        let isNotMax = idx !== maxValIndex;
        // Check if all criteria matched
        if (isGrater && isNotMax) secMaxVal = numbers[idx];
    }
    return maxVal * secMaxVal;
}

module.exports = max;