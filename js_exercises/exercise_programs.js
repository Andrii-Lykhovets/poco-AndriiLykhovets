var firstName = prompt('Write your first name:');
var lastName = prompt('Write your last name:');
var fullName = firstName + " " + lastName;

alert("Your full name is: " + fullName)


var l = 0
while (l < 10)  {
    console.log("While loop works!l = " + l);
    l++
}


let aGuess = Number(prompt('You will need to guess a number between 0-100. \nEnter your number:'));

console.log(aGuess)

while (aGuess !== 43) {
    aGuess = Number(prompt('Hi-hi, guess again :'));
    console.log(aGuess)
    if (aGuess === 43) {
        console.log("OMG good job!")
        break;
    }
}


while (true) {
    let aGuess = Number(prompt('Hi-hi, guess again :'));
    console.log(aGuess)
    if (isNaN(aGuess))
        console.log("Please enter a NUMBER:")
    if (aGuess === 43) {
        console.log("OMG good job!")
        break;
    }
}


// Ex. 4.1.5 (*) - Even or Odd
// Write a program that asks for the user to input a number:
// • If the number is even, print "The number is even."
// • If the number is odd, print "The number is odd."
// • If it is not a number, print "This is not a number."

userNumber = Number(prompt('Enter your number: '));
console.log(userNumber);

if (isNaN(userNumber)) {
    console.log("Please enter a NUMBER:");
}
else if (userNumber % 2 === 0) {
    console.log("Even");
} else {console.log("Odd");
}


// Ex. 4.1.6 (*) - Age Calculator
// Want to find out how old you’ll be? Calculate it!
// • Use prompt() and alert().
// • Ask user for birth year.
// • Ask user for a future year.
// • Calculate the 2 possible ages for the given year.
// • Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
//     For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
// 2026.

let birthYear = Number(prompt('Enter your birth year: '));
let futureYear = Number(prompt('Enter a future year: '));
let age1 = futureYear - birthYear;
let age2 = age1 -1
alert(`I will be either ${age2} or ${age1} in ${futureYear}.`);


// Ex. 4.1.7 (*) - Make a keyless car
// This car will only let you drive if you are over 18. Make it do the following:
// • Use prompt() and alert().
// • Ask a user for their age.
// • IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off"
// • IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!"
// • IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let userAge = Number(prompt('Enter your age: '));

if (userAge < 18) {
    console.log('Sorry, you are too young to drive this car. Powering off');
}
else if (userAge === 18) {
    console.log('Congratulations on your first year of driving. Enjoy the ride!');
}
else if (userAge > 18) {
    console.log('Powering On. Enjoy the ride!');
}


// Ex. 4.1.8 (*) - Print multiplication table
// Write a program that prints the multiplication table of the number 7. (Use a loop)

// let baseNum = 7
// let operationResult = 0;
// for (let multiNum = 1; multiNum < 10; operationResult = multiNum * baseNum) {
//     console.log(operationResult)
// }

let baseNum = 7;

for (let multiNum = 1; multiNum <= 10; multiNum++) {
    let operationResult = multiNum * baseNum;
    console.log(`${baseNum} x ${multiNum} = ${operationResult}`);
}


// Ex. 4.1.9 (*) - Play with for loop
//     Construct for loops that accomplish the following tasks:
// • Print the numbers 0 - 20, one number per line.

console.log('=====numbers 0 - 20, one number per line=====')
let number = 0
for (; number <= 20; number++) {
    console.log('number is ' + number);
}

// • Print only the ODD values from 3 to 29, one number per line. i += _number_ --> ascending, _number_ here is chaque

console.log('=====ODD values from 3 to 29, one number per line=====')
for (let i = 3; i <=29; i += 2) {
    console.log(i)
}

// • Print the EVEN numbers 12 down to -14 in descending order, one number per line. i -= _number_ --> descending

console.log('=====EVEN numbers 12 down to -14 in descending order=====')
for (let i = 12; i >= -14; i -= 2) {
    console.log(i)
}

// • Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
// it checks if i is a multiple of 3 using i % 3 === 0.

console.log('==50 down to 20 in descending order if the multiples of 3==')
for (let i = 50; i >= 20; i --) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// Ex. 4.1.10 (*) - Play with arrays and for loop
// Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
// construct for loops to accomplish the following tasks:
// a) Print each element of the array to a new line.
// b) Print each character of the string -in reverse order- to a new line.

