const input = require("./input.js");

function part1(input) {
    return input.split("\n")
        .map(el => parseInt(el, 10))
        .reduce((acc, num) => {
            acc += num;
            return acc;
        }, 0);
}

console.log(part1(input));
