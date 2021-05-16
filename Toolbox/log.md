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

But in the end, both commands have the same result. It is a matter of taste. Now it's time for my JavaScript *HelloWorld*. Given I am a newbie, I just repeat some code I googled for this session:

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

> First things first: *JS is a high-level, dynamic, interpreted programming language*. 

The *dynamic* part, I was not sure about. I researched on Wikipedia, and it seems to mean that some tasks are executed in runtime. Also, JS is a **dynamically typed** language, somewhat like Python.

Usually, development in JS is carried out inside a web browser. Although core JS provides methods for working with strings, arrays, sets, and so on, standard I/O is not supported from the box. Most interaction between user and a JS application is carried out via HTML and CSS.

> Node is a technology that frees JS from the need of a browser, by giving it full access to the entire operating system.

### Types and variables in JS

In this section I detail the way variables are delared, and the primitive types in JS.

#### Variable declaration

The first thing to clarify is variable declaration. As mentioned before, JS is *dynamically typed*, and thus no explicit type needs to be specified, and can be changed during runtime. There are two ways to declare variables: ```let``` and ```var```

I still don't understand very well de difference. ```var``` has a **function scope**, which means that JS will assume its existance inside a function (or main), even if it has no assigned value before being used. Consider the following code

```js
console.log(x)
var x = 5;
```

It will not throw error! It will just print a special value ```undefined```. If, on the other hand, the following code is executed

```js
console.log(x)
let x = 5;
```

It throws an error. It must be noted that ```let``` declares varibles only *inside a code block*. This is like most variable declaration work in other programming languages.

> Always try to declare variable using ```let```, rather than ```var```.

It is quite important to note that ```var``` attaches a certain variable to the object **window** in a web app. This is *bad practice*, since it can be modified unadvertedly by another script.

**Important:** There is a very useful declaration called ```const```. This doesn't allow changing value once initialized.

#### Variable types in JS

>In JS, there are 2 general classes of types: *primitive* and *object*. The type of a variable can be seen by the operator ```typeof```. 

The primitive types are:

1. ```Number``` (int, float point)
1. ```String```
1. ```Boolean```
1. ```null```
1. ```undefined```
1. Symbol

So, the standard ones from most languages I have already encountered. There are, however some which are particular to JS: ```null```, ```undefined``` and symbol. It is important to note that the concept of *empty* is embodied by ```null```, rather than ```undefined```, The former is more like a *placeholder*.

Anything that is not primitive, is an object typed. At this stage, I believe that this just means objects in the sense of OOP. I am somewhat familiar with the essence of OOP from my previous work in Python. However, I will focus more on this when needed.

**Note:** my intuition is that most problem solutions on JS are contextualized on OOP.

At this point, I just want to add two numbers and print to standard output. As seen in the simple example, ```let``` is used for variable declaration. My first approach is

```js
let n1 = 5.46;
let n2 = 3.45;
console.log(String(n1+n2))
```

**Note:** To convert between types, use functions with the typename, with first letter capitalized.

Standard output supports printing all primitive types, but only strings are not highlighted in my console. To process high level mathematics, the object ```Math``` can be used pretty much in the same way as ```math.h``` in C. For instance, I can print the inverse hyperbolic sine with in JS:

```js
console.log(Math.asinh(n1+n2))
```

At this stage, this is enough for me in terms of numbers. Now, strings are quite interesting. There are plenty of methods that allow:

* Slicing
* Searching
* In place modifications
* Inspection
* Padding/Trimming

The key is that **most string methods are accessed as member methods**. This sounds quite redundant, but the point is that the functions that perform actions on strings are like class methods, in the sense of OOP. Strings are immutable, these methods return new strings.

**IMPORTANT:** Slicing an string can be done with negative indexes, like Python. Of course string characters can be accessed like elements of an array.

Comparison operators work pretty much the same as other programming languages. Perhaps the greatest difference is the **equality comparison** operator. For *strict comparison*, use ```===```. Operator ```==``` is more lax, for it only checks for value, not type.

**SUPER IMPORTANT:** Only strings and numbers can be compared with operators ```===``` or ```==```. This happens because instances of classes may have different memory addresses and thus are scarcely completely equal. A proper check of equality between generic object instances would need comparison of each individual property and method.

A very interesting thing about strings, is that they can be generated from templates. these are of the form

```js
let templateString = `Hello ${someVariableName}`
```

### Standard I/O in JavaScript

