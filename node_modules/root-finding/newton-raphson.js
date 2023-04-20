'use strict';
const parser = require('mathjs').parser(),
    readline = require('readline'),
    async = require('async');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function newtonRaphsonCLI(initGuess, delta, maxGuess, diff, g) {
    if (initGuess !== undefined 
        && delta !== undefined
        && maxGuess !== undefined
        && diff !== undefined
        && g !== undefined) {
        newtonRaphson(initGuess, delta, maxGuess, diff, g);
    }

    async.series([
        (callback) => {
            rl.question("Please type in a function of one letiable that you want to evaluate: ", (equation) => {
                parser.eval('f(x) = ' + equation);
                g = parser.get('f');
                console.log(g);
                callback();
            })
        },
        (callback) => {
            rl.question("Enter an initial guess: ", (guess) => {
                initGuess = parseFloat(guess);
                callback();
            })
        },
        (callback) => {
            rl.question("Enter an delta, i.e. f(x + delta): ", (increment) => {
                delta = parseFloat(increment);
                callback();
            })
        },
        (callback) => {
            rl.question("Enter the maximum number of times you want to guess: ", (iteration) => {
                maxGuess = parseFloat(iteration);
                callback();
            })
        },
        (callback) => {
            rl.question("Enter the minimum threshold value: ", (eps) => {
                diff = parseFloat(eps);
                console.log("Working...\n");
                newton(initGuess, delta, maxGuess, diff, g);
                callback();
            })
        }
    ], () => {
        rl.close();
    });
}

function newtonRaphson(guess, increment, iteration, eps, f) {
    let rootFound = false;

    for (let i = 0; i < iteration + 1; i++) {
        let fPrime = (f(guess + increment / 2) - f(guess - increment / 2)) / increment;
        guess += -f(guess) / fPrime;
        if (Math.abs(f(guess)) <= eps) {
            rootFound = true;
            break;
        }
    }

    if (rootFound) {
        return guess;
    } else {
        return false;
    }
}

module.exports = {
    newtonRaphsonCLI: newtonRaphsonCLI,
    newtonRaphson: newtonRaphson
};
