// Ex. 4.2.4 (**) - Retirement calculator ca. 90 min
// Create a program that determines how many years you have left until retirement and the year you can retire.
// It should prompt for your current age and the age you want to retire and display the output as shown in the
// example below.
// • What is your current age? 25
// • At what age would you like to retire? 65
// • You have 40 years left until you can retire.
// • It’s 2024, so you can retire in 2064.

let curAge = Number(prompt('What is your current age?'));
let retAge = Number(prompt('At what age would you like to retire?'));

let timeToRet = retAge - curAge
let retYear = 2024 + timeToRet
console.log(`You have ${timeToRet} years left until you can retire.`)
console.log(`It’s 2024, so you can retire in ${retYear}`)
