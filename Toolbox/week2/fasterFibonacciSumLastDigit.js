const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", (line) => {
  returnFibonacci(line);
});

const returnFibonacci = (line) => {
  const number = parseInt(line);
  const rawLastDigit = fasterFibonacciLastDigit(number + 2) - 1;
  console.log(rawLastDigit >= 0 ? rawLastDigit : 9);
  process.exit();
};

function fasterFibonacciLastDigit(index) {
  if (index <= 1) {
    return index;
  } else {
    let fibonacciSequence = [0, 1, 1];
    while (
      fibonacciSequence[fibonacciSequence.length - 1] !== 1 ||
      fibonacciSequence[fibonacciSequence.length - 2] !== 0
    ) {
      fibonacciSequence.push(
        (fibonacciSequence[fibonacciSequence.length - 1] +
          fibonacciSequence[fibonacciSequence.length - 2]) %
          10
      );
    }
    return fibonacciSequence[index % (fibonacciSequence.length - 2)];
  }
}

module.exports = fasterFibonacciLastDigit;
