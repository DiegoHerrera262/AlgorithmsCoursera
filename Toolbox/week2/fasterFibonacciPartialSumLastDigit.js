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
  const numbers = line.toString().split(" ").map(Number);
  console.log(fasterFibonacciLastDigit(numbers[0], numbers[1]));
  process.exit();
};

function fasterFibonacciLastDigit(a, b) {
  const [index1, index2] = a > b ? [b, a] : [a, b];
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
    fibonacciSequence[(index1 + 1) % (fibonacciSequence.length - 2)];
  const rawLastDigit2 =
    fibonacciSequence[(index2 + 2) % (fibonacciSequence.length - 2)];
  const rawLastDigit = rawLastDigit2 - rawLastDigit1;
  return rawLastDigit < 0 ? 10 + rawLastDigit : rawLastDigit;
}

module.exports = fasterFibonacciLastDigit;
