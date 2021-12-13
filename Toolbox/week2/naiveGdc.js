const readline = require("readline");

rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", (line) => {
  processLine(line);
});

const processLine = (line) => {
  const numbers = line.toString().split(" ").map(Number);
  console.log(naiveGdc(numbers[0], numbers[1]));
  process.exit();
};

const naiveGdc = (a, b) => {
  let divisor = 1;
  for (let div = 2; div < (a > b ? a : b); div++) {
    if (a % div === 0 && b % div === 0) {
      divisor = div;
    }
  }
  return divisor;
};
