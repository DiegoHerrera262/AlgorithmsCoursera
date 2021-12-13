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
  // console.log(numbers);
  console.log(parseInt(fibonacciPeriod(numbers[0], numbers[1])));
  process.exit();
};

function fibonacciPeriod(index, modulo) {
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
          modulo
      );
    }
    return fibonacciSequence[index % (fibonacciSequence.length - 2)];
  }
}

module.exports = fibonacciPeriod;
