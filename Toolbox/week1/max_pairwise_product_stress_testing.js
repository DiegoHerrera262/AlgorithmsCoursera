/***************************************
//      MAXIMUM PAIRWISE PRODUCT
//          (STRESS TESTING)
***************************************/
// Date: 16/05/21
// Description: First assignment. find
//              the maximum pairwise
//              product of array els.
//              Using stress testing
//              for debugging.

// function for generating
// random array
function genRandomArray() {
    // Produce random size
    let size = 3 + Math.floor(Math.random() * 10);
    let randArray = [];
    // Apend series of integer random nums
    for (let it = 0; it < size; it++) randArray.push(1 + Math.floor(Math.random() * 10));
    return randArray;
}

// Slow but correct solution
function max_slow(numbers) {
    let prod = 0;
    for (let idx = 0; idx < numbers.length; idx++) {
        for (let jdx = idx + 1; jdx < numbers.length; jdx++) {
            let p = numbers[idx] * numbers[jdx]
            if (p > prod) {
                prod = p
            }
        }
    }
    return prod;
}

// Potentially faster solution
function max_fast(numbers) {
    // Find the maximum value
    let maxVal = 0;
    let maxValIndex = 0;
    for (let idx = 0; idx < numbers.length; idx++) {
        if (numbers[idx] > maxVal) {
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

// Start testing the solutions
for(; true ;){
    let sampleArray = genRandomArray();
    if (max_fast(sampleArray) !== max_slow(sampleArray)){
        console.log('Found counterexample');
        console.log(sampleArray);
        break;
    }
}