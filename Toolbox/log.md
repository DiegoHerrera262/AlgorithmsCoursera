# Algorithmic Toolbox

**date:** 13/05/21
**topic:** Intro to JavaScript

One of the goals of mine taking this course is to learn how to implement efficient algorithms in the contexts of web development and Quantum Computing. The knowledge on this course will be applied to my current job as a front-end developer. However, first I need to get acquainted with JavaScript. Today I am:

1. Setting up a JavaScript development environment on my mac.
1. Learning JavaScript fundamental notions (enough to get me going).
1. Solve two coding challenges from the course.

## Setting up JavaScript Environment

I already have my device set up for Python development, thus Homebrew is already installed. I understand that execution of JavaScript programs can be done directly from a browser, like Chrome. However, when developing code, I am terminal guy myself. So, it follows that **NodeJS** is a must-install for me. This is an execution environment that allows JavaScript to run on server-side development of web apps. I will be using it later on other courses, and so I think this is not a waste of time.

To install NodeJS, I run on my terminal

```bash
brew install nodejs
```

It is also possible to install this tool with the command

```bash
brew install node.js
```

But in the end, both commands have the same result. It is a matter of taste. Now it's time for my JavaScript _HelloWorld_. Given I am a newbie, I just repeat some code I googled for this session:

```js
let message = "Hello, world";
console.log(message);
```

Then, I proceed to test the installation by executing de program:

```bash
node Toolbox/week1/HelloWorld.js
```

**Note:** Although package manager npm is installed, the version manager nvm is not installed at this stage. I think this will be addressed in some of my web dev courses further in time.

## JavaScript APIs: Basics

To first approximation, I want to get familiar with:

1. JS data types and their most used methods.
1. How to read from standard input, and write to standard output.
1. Standard control structures: if/else, for, while...
1. How to create arrays, sets or equivalents in JS, and their most common methods.
1. How to iterate over arrays or equivalents efficiently in JS
1. How to define custom functions

> First things first: _JS is a high-level, dynamic, interpreted programming language_.

The _dynamic_ part, I was not sure about. I researched on Wikipedia, and it seems to mean that some tasks are executed in runtime. Also, JS is a **dynamically typed** language, somewhat like Python.

Usually, development in JS is carried out inside a web browser. Although core JS provides methods for working with strings, arrays, sets, and so on, standard I/O is not supported from the box. Most interaction between user and a JS application is carried out via HTML and CSS.

> Node is a technology that frees JS from the need of a browser, by giving it full access to the entire operating system.

### Types and variables in JS

In this section I detail the way variables are declared, and the primitive types in JS.

#### Variable declaration

The first thing to clarify is variable declaration. As mentioned before, JS is _dynamically typed_, and thus no explicit type needs to be specified, and can be changed during runtime. There are two ways to declare variables: `let` and `var`

I still don't understand very well de difference. `var` has a **function scope**, which means that JS will assume its existance inside a function (or main), even if it has no assigned value before being used. Consider the following code

```js
console.log(x);
var x = 5;
```

It will not throw error! It will just print a special value `undefined`. If, on the other hand, the following code is executed

```js
console.log(x);
let x = 5;
```

It throws an error. It must be noted that `let` declares varibles only _inside a code block_. This is like most variable declaration work in other programming languages.

> Always try to declare variable using `let`, rather than `var`.

It is quite important to note that `var` attaches a certain variable to the object **window** in a web app. This is _bad practice_, since it can be modified unadvertedly by another script.

**Important:** There is a very useful declaration called `const`. This doesn't allow changing value once initialized.

#### Variable types in JS

> In JS, there are 2 general classes of types: _primitive_ and _object_. The type of a variable can be seen by the operator `typeof`.

The primitive types are:

1. `Number` (int, float point)
1. `String`
1. `Boolean`
1. `null`
1. `undefined`
1. Symbol

So, the standard ones from most languages I have already encountered. There are, however some which are particular to JS: `null`, `undefined` and symbol. It is important to note that the concept of _empty_ is embodied by `null`, rather than `undefined`, The former is more like a _placeholder_.

Anything that is not primitive, is an object typed. At this stage, I believe that this just means objects in the sense of OOP. I am somewhat familiar with the essence of OOP from my previous work in Python. However, I will focus more on this when needed.

**Note:** my intuition is that most problem solutions on JS are contextualized on OOP.

At this point, I just want to add two numbers and print to standard output. As seen in the simple example, `let` is used for variable declaration. My first approach is

```js
let n1 = 5.46;
let n2 = 3.45;
console.log(String(n1 + n2));
```

**Note:** To convert between types, use functions with the typename, with first letter capitalized.

Standard output supports printing all primitive types, but only strings are not highlighted in my console. To process high level mathematics, the object `Math` can be used pretty much in the same way as `math.h` in C. For instance, I can print the inverse hyperbolic sine with in JS:

```js
console.log(Math.asinh(n1 + n2));
```

At this stage, this is enough for me in terms of numbers. Now, strings are quite interesting. There are plenty of methods that allow:

- Slicing
- Searching
- In place modifications
- Inspection
- Padding/Trimming

The key is that **most string methods are accessed as member methods**. This sounds quite redundant, but the point is that the functions that perform actions on strings are like class methods, in the sense of OOP. Strings are immutable, these methods return new strings.

**IMPORTANT:** Slicing an string can be done with negative indexes, like Python. Of course string characters can be accessed like elements of an array.

Comparison operators work pretty much the same as other programming languages. Perhaps the greatest difference is the **equality comparison** operator. For _strict comparison_, use `===`. Operator `==` is more lax, for it only checks for value, not type.

**SUPER IMPORTANT:** Only strings and numbers can be compared with operators `===` or `==`. This happens because instances of classes may have different memory addresses and thus are scarcely completely equal. A proper check of equality between generic object instances would need comparison of each individual property and method.

A very interesting thing about strings, is that they can be generated from templates. these are of the form

```js
let templateString = `Hello ${someVariableName}`;
```

### Standard I/O in JavaScript

Input and output is managed by `process` and `console`. JS seems to be quite object-oriented. The `process` is an object that is accessible anywhere. At this stage, there are three attributes which are useful for me: `process.argv`, `process.stdout`, `process.stdin`.

It is possible to write something to standard output using

```js
process.stdout.write(varToWrite);
```

It is somewhat like using

```js
console.log(varToWrite);
```

But in my device, the first prints an additional `%` character in terminal. This happens beacuse _a new line has to be added to process_. The property `process.argv` is akin to `sys.argv` in Python, so it is quite useful! The process of capturing input is way more convoluted than other programming languages. I don't like this at the moment, but I must suck it up. It is managed by `process.stdin`.

I still don't get all the details on `process.stdin`. As far as I'm concerned, this property listens to standard input constantlty, once it is triggerd by an event. This is called **asyncronous execution**. Once it is triggered, some _callback function_ is used to process the data. As a result, most of the time, reading from stdin looks like

```js
process.stdin.on("data", function (data) {
  if (wantToReadData) {
    doSomething(data);
    decideIfStillReading(wantToReadData);
  } else {
    processInformation(readArguments);
    process.exit();
  }
});
```

This structure is quite inconvenient, not very elegant, and very buggy at this stage of my learning process. Haven't been able to find information about triggering events for `process.stdin.on`, the only one untill now is `'data'`. For the moment, this will have to do.

> The listening process continues indefinitely, unless the port is silenced or the whole app process is exited

## Introduction to Algorithmic Toolbox (week 1)

In this week, we got familiarized with the way the course works. My main goal is to be able to implement efficient algorithms for various computing tasks using JavaScript. It is not enough to be able to write code that works... It has to be fast as lightning. Clients want to be served correctly and fast. Hence my desire to get more familiarized with algorithms. On the other hand, I believe this course allows me to get more acquainted with JS fundamentals.

This week there are two tasks:

1. Sumation of two integers
1. Maximum Pairwise Product of array

The first one is designed to help the students familiarize with the way submissions are to be evaluated. The former, is used to present very important tools of algorithm testing:

1. Propose naive solution
1. Improve upon it
1. Debug new solution
1. Stress-test the improved solution

I won't consider too much the problem of adding two numbers. It can be addressed on file `APlusB.js`. I will focus on the **max pairwise product problem**.

**Important:** Since all numbers are treated the same on JS, overflow is not expected for integer multiplication under the constraints of the coding problems in the course. All numbers are 64-bit.

### Max Pairwise Product

In this exercise, the idea is to find the maximum pairwise product of the elements in a numeric array of non-negative integers. The first idea is to evaluate _all_ pairwise products and iterating until max is found. However, in the worst case scenario, that all pairs should be evaluated, it takes $\mathcal{O}(N^2)$ steps to solve. This algorithm can be implemented in JS as:

```js
function max(numbers) {
  let prod = 0;
  for (let idx = 0; idx < numbers.length; idx++) {
    for (let jdx = idx + 1; jdx < numbers.length; jdx++) {
      let p = numbers[idx] * numbers[jdx];
      if (p > prod) {
        prod = p;
      }
    }
  }
  return prod;
}
```

This naive solution is quite slow, and fails submition. An obvious improvement is by noting that the maximum value product for an array of _non-negative positive integers_, is just the product of the maximum value and the second maximum value of the numbers inside the array. A better solution thus is simply:

```js
function max(numbers) {
  // Find the maximum value
  let maxVal = 0;
  let maxValIndex = 0;
  for (let idx = 0; idx < numbers.length; idx++) {
    if (numbers[idx] > maxVal) {
      maxVal = numbers[idx];
      maxValIndex = idx;
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
```

Sometimes, a proposed fast solution is not completely correct. It may happen that the rush prevent us from considering somewhat _ill-posed_ cases that the instructions do not take into account. A way to detect if a solution is not proper, and potentially fix it, is called stress testing.

> The principle of **stress testing** is that two solutions that are both improper, or one improper and other correct, should produce different outcomes for the solution of a given sample case.

As a result, if I generate a large enough sample of random cases, I can check if my fast solution is correct, by proposing a simple but potentially correct solution and comparing the outputs over the set. If one case produces a different output for both solution algorithms, then I can check which is correct. If the incorrect is the fast one, I propose a change that solves the error, and run a test again. This process should be repeated until the sampling takes so long that it can be assumed that the solutions coincide.

**Important:** I should be very sure that the auxiliary solution for comparison is correct, even though it may be really slow.

An example of a stress test can be found at `Toolbox/week1/max_pairwise_product_stress_test.js`. The proposed fast solution is correct, and thus the stress test would run forever.

##### Some tips on Stress Testing

1. Start with a small subset of test cases where I think an algorithm fails. Finding a counterexample can be hard, specially if the error is small.
1. Be carefull with ill posed cases that have to do with language limitations, like integer overflow o bad double division. Test them first.
1. If a mathematical proof that my algorithm is correct can be achieved, go for it! Won't be time wasted for sure.

##### Summary of Stress testing

To check thah an algorithm works properly

1. Test some small cases and see if the output is correct by hand.
1. Generate a big input and see if program doesn't consume much resourses.
1. Perform a test over lange ill-posed cases (int overflow, wrong typing, etc.)
1. Perform a **stress test** to identify mmissed errors.

## Why Study Algorithms (week 2)

Usually, an algorithm is thought as the sequence of transformations that a set of inputs has to undergo, to produce certain outputs. The inputs correspond to the _raw data_ present in a given _problem_, and the outputs are the _desired result_ of solving such a problem. A problem should be defined unambiguously, which means that for a given input, only a given output is acceptable.

> WHen solving computational problem, two questions are of huge importance:
>
> 1. Does a particular algorithm yield correct outputs?
> 2. How much time will it take to produce an output?

It is important to design algorithms that not only solve a problem, but also that produce results with the least amount of resources each time it is implemented.

In th context of computational problem solving, it is relevant to distinguish between a **problem** and a **problem instance**. A problem instance usually is simply a problem with a particular input set. In contrast, a problem refers toa generic situation, that can be formulated in mathematical language. So basically that is what a computer scientist does: he or she converts a concrete problem instance to a problem, and solves it.

### Discussion of Fibonacci numbers

To start my journey, I revisit a recursion classic: Fibonacci numbers. Remember that these are very interesting numbers that appear everywhere in mathematics. They are defined as follows:

\[
F*n = F*{n-1} + F\_{n-2}, \text{ if } n \geq 2 \\
F_1 = 1 \\
F_0 = 0
\]

The computational problem that can be defined by this sequence is simply

> Given a non-negative integer $n$, compute the associated Fibonacci number $F_n$.

Now, the very definition suggests a simple algorithm, which I will detail using a JavaScript function

```javascript
const recursiveFibonacci = (number) => {
  if (number <= 1) {
    return number;
  }
  return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
};
```

This is pretty straightforward, and obviously correct. Also, it is evident that the amount of _lines of code_ required to compute the $n$th Fibonacci number is roughly of the order of $F_n$. But wait... the Fibonacci sequence grows incredibly fast! How fast? Well, it grows exponentially. It is straightforward to show (by _induction_) that the Fibonacci sequence grows at least as fast as $2^{n/2}$. As a result, even on the most powerful computer available today, the one hundredth Fibonacci number would be computed in millennia.

A natural question arises: how to efficiently compute Fibonacci numbers? Well, the problem with the direct algorithm is that here is a lot of redundancy

> The naive algorithm requires a computer to evaluate $F_{n-k}$ for $k = 0,1,\ldots, n-3$ several times. This is quite lengthy and unnecessary.

A more efficient approach is to compute a Fibonacci number, and _store it_, so that the computer does not need to recompute it over and over. A better program, in JavaScript, could be the following.

```javascript
function fasterFibonacci(number) {
  if (number <= 1) {
    return number;
  }
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
```

### Discussion of greatest common divisor (gcd)

Remember that the greatest common divisor of two integers $a$ and $b$, denoted by $gcd(a,b)$, is de greatest integer that divides both numbers. Computations of gcds is super important for cryptography, since for example RSA encryption requires computing divisors in an efficient way.

> We would like to come up with an algorithm that allows computation of the gcd of two very large positive integers.

Let's start with a naive algorithm. A straightforward idea requires evaluating all the possible numbers that divide both $a$ and $b$, checking the largest one, and keeping that number. I think this could be an implementation on JavaScript:

```javascript
function naiveGcd(a, b) {
  let divisor = 1;
  for (let div = 2; div < (a > b ? a : b); div++) {
    if (a % div === 0 && b % div === 0) {
      divisor = div;
    }
  }
  return divisor;
}
```

The caveat of this algorithm is that it will take quite a lot of time to produce a result if the considered numbers are way large. Small numbers are not that interesting, and thus a faster algorithm is needed. Notice that the current algorithm has a time that scales more or less linearly with the size of the inputs. The key to this is a qte famous theorem of mathematics:

> If $r$ is the reminder of the division of $a$ by $b$ ,and $a \geq b$, it is so that
> $$\text{gcd}(a,b) = \text{gcd}(b,r) = \text{gcd}(r,b)$$

Now, this is a remarkable statement, and a proof will be sketched here here. Notice that, by definition of reminder:

$$r = m \cdot \text{gcd}(a,b)$$

For some integer $m$. This is straightforward to see. From which it can be deduced that $d$ divides both $r$ and $b$. Now, the fact that $\text{gcd}(a,b)$ divides $r$ means that

$$\text{gcd}(r,b) = \text{gcd}(a,b)$$

For consistency. Thus, a recursive algorithm can be proposed to compute the gcd of two numbers. This is the so called Euclid's algorithm. A JavaScript function that does the trick may be this one:

```javascript
function euclidGcd(a, b) {
  let max = a > b ? a : b;
  let min = a > b ? b : a;
  if (min === 0) {
    return max;
  } else {
    return euclidGcd(max % min, min);
  }
}
```

The base case here is with $b = 0$, we could have used another based on the fact that $\text{gdc}(a, 1) = a$, but anyhow, the algorithm seems to work. Now, because we now that reminder operation diminishes a positive integer, we have a strictly decreasing sequence of integers by following Euclid's algorithm. This means that, eventually, it will converge, and the mathematical theorem guarantees that the final answer will be correct.

The question that remains is whether it will converge faster than the naive algorithm. How many reminders are computed? Well, it is claimed that runtime os of the order of $\text{log}(a \cdot b)$. Which I find surprising! I don't have a clue on how to prove this, but eventually I believe I will. Notice, however, that execution time is now sub=linear, and it is possible to compute the gcd of veri large numbers with a few iterations, how cool!

> The takeaway lesson is that most of the times, coming up with a good algorithm for solving a complicated problem requires a very interesting mathematical insight.

### Computing run times and Big O notation

Usually, the runtime of an algorithm depends critically on the architecture of a particular computer. Its basic operations, memory management, etc., can affect how an algorithm performs. For instance, a literal Turing machine can be way slower than a state of the art modern digital computer.

> In general, finding an **absolute** measure of the run time of an algorithm is a huge mess. We need a mor generic, yet powerful notion about the speed of an algorithm.

The key is to find a measure that produces working results for large inputs, and that does not depend on the actual inner workings of a particular computer. This measure would tell us _how running time scales with the input size_. This can be done by noticing that the details of a particular computer only affect runtime by a constant factor. If a computer is two times faster, an algorithm will run two times faster than in another computer. Following this instance, to runtime estimates are equivalent if they differ only by a constant factor.

Now this new insight is not taking into account that a factor of a million is non negligible for runtimes. We car circumvent this problem by considering how running times _scale_ with the ize of the inputs, and specially when those inputs are quite large. In that case, any constant multiple is irrelevant, since what matters the most is the size of the input. For instance, if runtime scales as $10^{23} n$, where $n$ is the size of he inputs, it will be better than $n^2$ for some very large input.

A common way to convey this ideas is by using **Big O** notation. To define it precisely, consider two functions $f(n)$ and $g(n)$, defined in the set of positive integers. We are going to denote by

$$f(n) = \mathcal{O}(g)$$

The fact that there exist constants $N$ and $c$, such that for all $n \geq N$, it is so that

$$f(n) \leq c g(n)$$

This just says that $f$ is bounded above by some constant multiple of $g$. One of the benefits of this notation is that it helps clarifying how runtimes scale with input size in a mathematically precise way. In some instances, to benchmark algorithms, even with exact expressions that relate input size and runtime, it is not immediately clear which one is better for which sizes. Here Big O notation can serve as a direct way to compare several algorithms asymptotically. Furthermore, the notation gets cleaner because we don't care about constants.

> **IMPORTANT:** Although Big O notation can be useful for comparing algorithms, constant factor really matter! In fact, a factor of 2 can be decisive some times. It is sometimes needed to dwell into the nitty gritty details in order to benchmark an algorithm and make it run fast and efficiently.

There are some rules about manipulating and sort of operating with Big O expressions. They can be rigorously proven, but for now, let's leave them as postulates:

> 1. $n^a = \mathcal{O}(n^b)$ if $0 < a < b$. This is sort of useful for comparing polynomial runtimes.
> 1. $n^a = \mathcal{O}(b^n)$ if $a > 0$ and $b>1$. Exponential beats polynomial.
> 1. $(\text{log}(n))^a = \mathcal{O}(n^b)$ if $0 < a, b$. Polynomial beats logarithm.
> 1. Small terms can always be dropped out. So $n + 0.5^n = \mathcal{O}(n)$

Now, let's consider as an example, the faster Fibonacci algorithm presented in previous sections. Consider the index of the Fibonacci number to be grater than 1. In that case, the algorithm starts by initializing an array

```javascript
const fibonacciSequence = Array(number + 1).fill(0);
```

So, apart from allocating perhaps a pointer to the first element of the array, and a memory space for its size, we are filling it with zeros to prevent garbage damaging our results. This operation may have a runtime $\mathcal{O}(n)$, where $n$ is the order or the Fibonacci number. The next step is simply a pair of initializations of array elements, wor a validation, which is $\mathcal{O}(1)$. Now, the tricky step is the update of the array by iteratively computing lower index Fibonacci numbers

```javascript
if (idx > 1) {
  fibonacciSequence[idx] =
    fibonacciSequence[idx - 1] + fibonacciSequence[idx - 2];
}
```

We are concerned with _large input values_, which means that the sums are not trivial. In fact, since $F_n \geq 2^n$, it is so that each number in the array needs $\mathcal{O}(n)$ digits to be represented in a computer. As a result, $\mathcal{O}(n)$ operations are needed to compute a given Fibonacci number. Since we have to compute $\mathcal{O}(n)$ Fibonacci numbers, it is so that the important computation of the algorithm employs $\mathcal{O}(nˆ2)$ operations. Ultimately, since all other parts of the algorithm require a lower number of operations, it is so that the complexity of our fast Fibonacci algorithm is $\mathcal{O}(nˆ2)$. Which is pretty decent for indexes up to about 30000.
