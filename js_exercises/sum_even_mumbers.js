// Write a function that takes an array of numbers and returns the sum of all even numbers.
// Example:
input = [44, 0, 14, 20, 79, 99, 38, 62, 60, 96, 55, 57, 36, 75, 58, 45, 15, 10, 24, 75, 92, 74, 78, 37, 25, 2, 41, 48, 4, 65]

function sumEvenNumbers(array) {
    let evenNumsSum = 0;
    for (let index = 0; index < array.length; index++) {
        let val = array[index]
        if (val % 2 === 0) {
            evenNumsSum += val
            // evenNumsSum = evenNumsSum + val
        }
    }
    return evenNumsSum
}

function sumOfEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}

const result = sumEvenNumbers(numbers)
const numbers = input;
console.log(result);
