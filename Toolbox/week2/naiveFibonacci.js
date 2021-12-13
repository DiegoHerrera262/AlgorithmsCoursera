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
  console.log(naiveFibonacci(number));
  process.exit();
};

function naiveFibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    return naiveFibonacci(number - 1) + naiveFibonacci(number - 2);
  }
}

module.exports = naiveFibonacci;
