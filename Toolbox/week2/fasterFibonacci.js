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
  console.log(fasterFibonacci(number));
  process.exit();
};

function fasterFibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    const fibonacciSequence = Array(number + 1).fill(0);
    for (let idx = 0; idx <= number; idx++) {
      if (idx === 1) {
        fibonacciSequence[idx] = 1;
      }
      if (idx > 1) {
        fibonacciSequence[idx] =
          fibonacciSequence[idx - 1] + fibonacciSequence[idx - 2];
      }
    }
    return fibonacciSequence[number];
  }
}

module.exports = fasterFibonacci;
