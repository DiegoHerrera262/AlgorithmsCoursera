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
  console.log(fasterFibonacciLastDigit(number));
  process.exit();
};

function fasterFibonacciLastDigit(index) {
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
  const rawLastDigit1 =
    fibonacciSequence[index % (fibonacciSequence.length - 2)];
  const rawLastDigit2 =
    fibonacciSequence[(index + 1) % (fibonacciSequence.length - 2)];
  return (rawLastDigit2 * rawLastDigit1) % 10;
}

module.exports = fasterFibonacciLastDigit;
