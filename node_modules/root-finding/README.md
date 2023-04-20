# Root-Finding

[![Build Status](https://travis-ci.org/vlmlee/Root-Finding.svg?branch=master)](https://travis-ci.org/vlmlee/Root-Finding)

A javascript implementation of root finding using Newton-Raphson's method. Users are able to enter their own expressions through the console and they are parsed by the [mathjs parser](http://mathjs.org/index.html). 

## Installation

You can install this package through npm:

```
npm install root-finding
```

## Usage 

For the command line version of the Newton-Raphson's algorithm, write this into a file:

```
const nr = require('root-finding');

nr.newtonRaphson-CLI();
```

Then run the script with `node script.js` and enter in the values that you're prompt with.

For the pure function, use:

```
/**
* @param {number} guess - The initial x value to guess where the root is.
* @param {number} increment - The delta x to be used for the next guess.
* @param {number} iteration - The number of times to perform the algorithm.
* @param {number} eps - The smallest f(x) value to be considered a root.
* @param {Function} f - The expression whose root you want to solve.
*/
nr.newtonRaphson(guess, increment, iteration, eps, f);

// Example

function FofX(x) {
	return x + 2; // Our expression is f(x) = x + 2.
}

nr.newtonRaphson(1, 0.1, 10, 0.001, FofX); // => returns -2.
```

## Description

Newton-Raphson is a fundamental algorithm in computational science. It uses a guess and check strategy that finds the roots to functions that are continuous and well behaved. Root finding is important because it allows us to solve system of equations that involve higher order polynomials. 

  (x<sup>2</sup> + 1) = (4 - x<sup>3</sup>) &nbsp;  =>  &nbsp;  (x<sup>3</sup> + x<sup>2</sup> - 3) = 0

The algorithm itself derives from analytical geometry. When we're trying to find the root of an expression, we are looking for the x-value where the curve of that equation crosses the x-axis. That gives us an f(x) = 0 value. Newton-Raphson takes a guess, or an arbitrary x-value, that is close to the root and constructs a tangent line to that curve. It then checks if the zero root of that line is also the root of the curve by plugging it into the equation. If that isn't the root, then it uses the value as the next guess, repeating it until f(x<sub>i</sub>) ~ 0, where i is the iteration.

When we construct the tangent line, we have the equation:

  y = mx + b

We see that m, the slope, is just the derivative of the curve. For the y-intercept, it may be difficult to see but suppose you construct a line that crosses (0, -a). You will notice that the slope multipled by some arbitrary value x<sub>i</sub> will get us a g(x<sub>i</sub>) value that is shifted **a** above the original line. If you take the difference between f(x) and g(x), you will get the y-intercept. So:

  b = f(x<sub>i</sub>) - g(x<sub>i</sub>) = f(x<sub>i</sub>) - f'(x<sub>i</sub>)(x<sub>i</sub>)

Formulating the final equation, we have:

  y = f'(x<sub>i</sub>)(x) + f(x<sub>i</sub>) - f'(x<sub>i</sub>)(x<sub>i</sub>)

Or: 

  y = f'(x<sub>i</sub>)(x - x<sub>i</sub>) + f(x<sub>i</sub>)

Setting y to zero, we reduce the equation to:

  x = x<sub>i</sub> - f(x<sub>i</sub>) / f'(x<sub>i</sub>)

Which is just the root of the tangent line. In this way, we generate new guesses (x) that we will plug into our equation and see if it is approximately equal to the root. 

Newton-Raphson, of course, have limitations. It will not be able to handle discontinuous functions and functions that generate an infinite number of new guesses because of a loop.
