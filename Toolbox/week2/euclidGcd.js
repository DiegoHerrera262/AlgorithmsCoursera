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
  console.log(euclidGcd(numbers[0], numbers[1]));
  process.exit();
};

const euclidGcd = (a, b) => {
  let max = a > b ? a : b;
  let min = a > b ? b : a;
  if (min === 0) {
    return max;
  } else {
    return euclidGcd(max % min, min);
  }
};
