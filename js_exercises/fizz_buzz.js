// 3.2 Intermediate Exercises

// ! Ex. 3.2.1 (**) - FizzBuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the
// number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// 1. Generate a list of numbers
// numbers = [1, 2, 3, ... 100]
// 2. Iterate through the list and output "Fizz" for multiples of three or "Buzz" for the multiples of five
// for multiple in numbers:
//     if multiple % 3 == 0:
//         print("Fizz")
//     elif multiple % 5 == 0:
//         print("Buzz")
//     elif multiple % 3 and 5 == 0:
//         print("FizzBuzz")

let numbers = [];

let i = 1;
while (numbers.length < 100) {
    if (i % 3 === 0 || i % 5 === 0) {  // Multiple of 3, 5, or both
        numbers.push(i);
    }
    i++;
}

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else {
        console.log(i)
    }
}


for (let j = 1; j <= 100; j++) {
    if (j % 3 == 0) {
        console.log('Fizz');
    } else if (j % 5 == 0) {
        console.log('Buzz');
    } else if (j % 3 === 0 && j % 5 === 0) {
        console.log('FizzBuzz')
    } else {
        console.log(j)
    }
}
